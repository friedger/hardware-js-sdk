import { EventEmitter } from 'events';
import { CallMethod } from './events';
import { CoreApi } from './types/api';

export interface InjectApi {
  call: CallMethod;
  eventEmitter: EventEmitter;
  init: CoreApi['init'];
  dispose: CoreApi['dispose'];
  uiResponse: CoreApi['uiResponse'];
  cancel: CoreApi['cancel'];
}

export const inject = ({
  call,
  cancel,
  dispose,
  eventEmitter,
  init,
  uiResponse,
}: InjectApi): CoreApi => {
  const api: CoreApi = {
    on: <T extends string, P extends (...args: any[]) => any>(type: T, fn: P) => {
      eventEmitter.on(type, fn);
    },

    off: (type, fn) => {
      eventEmitter.removeListener(type, fn);
    },

    removeAllListeners: type => {
      eventEmitter.removeAllListeners(type);
    },

    init,

    call,

    dispose,

    uiResponse,

    cancel,
    /**
     * 搜索设备
     */
    searchDevices: () => call({ method: 'searchDevices' }),

    /**
     * 获取设备信息
     */
    getFeatures: params => call({ ...params, method: 'getFeatures' }),

    /**
     * 检查固件版本
     */
    checkFirmwareRelease: params => call({ ...params, method: 'checkFirmwareRelease' }),

    /**
     * 检查蓝牙固件版本
     */
    checkBLEFirmwareRelease: params => call({ ...params, method: 'checkBLEFirmwareRelease' }),

    /**
     * 检查 bridge 版本
     */
    checkTransportRelease: () => call({ method: 'checkTransportRelease' }),

    deviceBackup: params => call({ ...params, method: 'deviceBackup' }),
    deviceChangePin: params => call({ ...params, method: 'deviceChangePin' }),
    deviceFlags: params => call({ ...params, method: 'deviceFlags' }),
    deviceRebootToBootloader: params => call({ ...params, method: 'deviceRebootToBootloader' }),
    deviceRecovery: params => call({ ...params, method: 'deviceRecovery' }),
    deviceReset: params => call({ ...params, method: 'deviceReset' }),
    deviceSettings: params => call({ ...params, method: 'deviceSettings' }),
    deviceUpdateReboot: params => call({ ...params, method: 'deviceUpdateReboot' }),
    deviceWipe: params => call({ ...params, method: 'deviceWipe' }),

    evmGetAddress: params => call({ ...params, method: 'evmGetAddress' }),
    evmGetPublicKey: params => call({ ...params, method: 'evmGetPublicKey' }),
    evmSignMessage: params => call({ ...params, method: 'evmSignMessage' }),
    evmSignMessageEIP712: params => call({ ...params, method: 'evmSignMessageEIP712' }),
    evmSignTransaction: params => call({ ...params, method: 'evmSignTransaction' }),
    evmSignTypedData: params => call({ ...params, method: 'evmSignTypedData' }),
    evmVerifyMessage: params => call({ ...params, method: 'evmVerifyMessage' }),

    btcGetAddress: params => call({ ...params, method: 'btcGetAddress' }),
    btcGetPublicKey: params => call({ ...params, method: 'btcGetPublicKey' }),
    btcSignMessage: params => call({ ...params, method: 'btcSignMessage' }),
    btcSignTransaction: params => call({ ...params, method: 'btcSignTransaction' }),
    btcVerifyMessage: params => call({ ...params, method: 'btcVerifyMessage' }),
  };
  return api;
};
