import { NexaAddress as HardwareNexaAddress } from '@onekeyfe/hd-transport';
import type { CommonParams, Response } from '../params';

export type NexaAddress = {
  path: string;
} & HardwareNexaAddress;

export type NexaGetAddressParams = {
  path: string | number[];
  prefix?: string;
  scheme?: string;
  showOnOneKey?: boolean;
};

export declare function nexaGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & NexaGetAddressParams
): Response<NexaAddress>;

export declare function nexaGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: NexaGetAddressParams[] }
): Response<Array<NexaAddress>>;