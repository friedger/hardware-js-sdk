import {
  TxAckResponse,
  TxInputType,
  TxOutputType,
  TxRequest,
  TxRequestSerializedType,
  TypedCall,
} from '@onekeyfe/hd-transport';
import { ERRORS, HardwareErrorCode } from '@onekeyfe/hd-shared';
import {
  RefTransaction,
  SignedTransaction,
  TransactionOptions,
} from '../../../types/api/btcSignTransaction';

type RefTxs = { [hash: string]: RefTransaction };
type Props = {
  typedCall: TypedCall;
  txRequest: TxRequest;
  refTxs: RefTxs;
  inputs: TxInputType[];
  outputs: TxOutputType[];
  serializedTx: string[];
  signatures: string[];
};

const requestPrevTxInfo = ({
  txRequest: { request_type, details },
  refTxs,
}: Props): TxAckResponse => {
  const { tx_hash } = details;
  if (!tx_hash) {
    throw ERRORS.TypedError(
      HardwareErrorCode.RuntimeError,
      'requestPrevTxInfo: unknown details.tx_hash'
    );
  }
  const tx = refTxs[tx_hash.toLowerCase()];
  if (!tx) {
    throw ERRORS.TypedError(
      HardwareErrorCode.RuntimeError,
      `requestPrevTxInfo: Requested unknown tx: ${tx_hash}`
    );
  }
  if (!tx.bin_outputs) {
    throw ERRORS.TypedError(
      HardwareErrorCode.RuntimeError,
      `requestPrevTxInfo: bin_outputs not set tx: ${tx_hash}`
    );
  }
  if (request_type === 'TXINPUT') {
    return { inputs: [tx.inputs[details.request_index]] };
  }
  if (request_type === 'TXOUTPUT') {
    return { bin_outputs: [tx.bin_outputs[details.request_index]] };
  }
  if (request_type === 'TXEXTRADATA') {
    if (typeof details.extra_data_len !== 'number') {
      throw ERRORS.TypedError(
        HardwareErrorCode.RuntimeError,
        'requestPrevTxInfo: Missing extra_data_len'
      );
    }
    if (typeof details.extra_data_offset !== 'number') {
      throw ERRORS.TypedError(
        HardwareErrorCode.RuntimeError,
        'requestPrevTxInfo: Missing extra_data_offset'
      );
    }
    if (typeof tx.extra_data !== 'string') {
      throw ERRORS.TypedError(
        HardwareErrorCode.RuntimeError,
        `requestPrevTxInfo: No extra data for transaction ${tx.hash}`
      );
    }
    const data = tx.extra_data;
    const dataLen = details.extra_data_len;
    const dataOffset = details.extra_data_offset;
    const extra_data = data.substring(dataOffset * 2, (dataOffset + dataLen) * 2);
    return { extra_data };
  }
  if (request_type === 'TXMETA') {
    const data = tx.extra_data;
    const meta = {
      version: tx.version,
      lock_time: tx.lock_time,
      inputs_cnt: tx.inputs.length,
      outputs_cnt: tx.bin_outputs.length,
      timestamp: tx.timestamp,
      version_group_id: tx.version_group_id,
      expiry: tx.expiry,
      branch_id: tx.branch_id,
    };

    if (typeof data === 'string' && data.length !== 0) {
      return {
        ...meta,
        extra_data_len: data.length / 2,
      };
    }
    return meta;
  }
  throw ERRORS.TypedError(
    HardwareErrorCode.RuntimeError,
    `requestPrevTxInfo: Unknown request type: ${request_type}`
  );
};

const requestSignedTxInfo = ({
  txRequest: { request_type, details },
  inputs,
  outputs,
}: Props): TxAckResponse => {
  if (request_type === 'TXINPUT') {
    return { inputs: [inputs[details.request_index]] };
  }
  if (request_type === 'TXOUTPUT') {
    return { outputs: [outputs[details.request_index]] };
  }
  if (request_type === 'TXMETA') {
    throw ERRORS.TypedError(
      HardwareErrorCode.RuntimeError,
      'requestSignedTxInfo: Cannot read TXMETA from signed transaction'
    );
  }
  if (request_type === 'TXEXTRADATA') {
    throw ERRORS.TypedError(
      HardwareErrorCode.RuntimeError,
      'requestSignedTxInfo: Cannot read TXEXTRADATA from signed transaction'
    );
  }
  throw ERRORS.TypedError(
    HardwareErrorCode.RuntimeError,
    `requestSignedTxInfo: Unknown request type: ${request_type}`
  );
};

// requests information about a transaction
// can be either signed transaction itself of prev transaction
const requestTxAck = (props: Props) => {
  const { tx_hash } = props.txRequest.details;
  if (tx_hash) {
    return requestPrevTxInfo(props);
  }
  return requestSignedTxInfo(props);
};

const saveTxSignatures = (
  serializedTx: string[],
  signatures: string[],
  txRequest?: TxRequestSerializedType
) => {
  if (!txRequest) return;
  const { signature_index, signature, serialized_tx } = txRequest;
  if (serialized_tx) {
    serializedTx.push(serialized_tx);
  }
  if (typeof signature_index === 'number') {
    if (!signature) {
      throw ERRORS.TypedError(
        HardwareErrorCode.RuntimeError,
        'saveTxSignatures: Unexpected null in oneKey:TxRequestSerialized signature.'
      );
    }
    signatures[signature_index] = signature;
  }
};

const processTxRequest = async (
  props: Props
): Promise<{
  signatures: string[];
  serializedTx: string;
}> => {
  const { typedCall, txRequest, refTxs, inputs, outputs, serializedTx, signatures } = props;
  saveTxSignatures(serializedTx, signatures, txRequest.serialized);
  if (txRequest.request_type === 'TXFINISHED') {
    return Promise.resolve({
      signatures,
      serializedTx: serializedTx.join(''),
    });
  }

  const txAck = requestTxAck(props);
  const { message } = await typedCall('TxAck', 'TxRequest', { tx: txAck });
  return processTxRequest({
    typedCall,
    txRequest: message,
    refTxs,
    inputs,
    outputs,
    serializedTx,
    signatures,
  });
};

export default async (
  typedCall: TypedCall,
  inputs: TxInputType[],
  outputs: TxOutputType[],
  refTxsArray: RefTransaction[],
  options: TransactionOptions,
  coinName: string
): Promise<SignedTransaction> => {
  const refTxs: RefTxs = {};
  refTxsArray.forEach(tx => {
    refTxs[tx.hash.toLowerCase()] = tx;
  });

  const { message } = await typedCall('SignTx', 'TxRequest', {
    ...options,
    inputs_count: inputs.length,
    outputs_count: outputs.length,
    coin_name: coinName,
  });

  return processTxRequest({
    typedCall,
    txRequest: message,
    refTxs,
    inputs,
    outputs,
    serializedTx: [],
    signatures: [],
  });
};
