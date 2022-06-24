import { ERRORS } from '../constants';
import { UI_REQUEST } from '../constants/ui-request';
import { BaseMethod } from './BaseMethod';
import { validateParams } from './helpers/paramsValidator';
import { getBinary } from './firmware/getBinary';
import { uploadFirmware } from './firmware/uploadFirmware';

type Params = {
  binary?: ArrayBuffer;
  version?: number[];
  updateType: 'firmware' | 'ble';
};

export default class FirmwareUpdate extends BaseMethod<Params> {
  init() {
    this.allowDeviceMode = [UI_REQUEST.BOOTLOADER, UI_REQUEST.INITIALIZE];
    this.requireDeviceMode = [UI_REQUEST.BOOTLOADER];

    const { payload } = this;

    validateParams(payload, [
      { name: 'version', type: 'array' },
      { name: 'binary', type: 'buffer' },
    ]);

    if (!payload.updateType) {
      throw ERRORS.TypedError('Method_InvalidParameter', 'updateType is required');
    }

    this.params = { updateType: payload.updateType };

    if ('version' in payload) {
      this.params = {
        ...this.params,
        version: payload.version,
      };
    }

    if ('binary' in payload) {
      this.params = {
        ...this.params,
        binary: payload.binary,
      };
    }
  }

  async run() {
    const { device, params } = this;

    let binary;

    try {
      if (params.binary) {
        binary = this.params.binary;
      } else {
        if (!device.features) {
          throw ERRORS.TypedError('Runtime', 'no features found for this device');
        }
        const firmware = await getBinary({
          features: device.features,
          version: params.version,
          updateType: params.updateType,
        });
        binary = firmware.binary;
      }
    } catch (err) {
      throw ERRORS.TypedError('Method_FirmwareUpdate_DownloadFailed', err);
    }

    return uploadFirmware(
      params.updateType,
      this.device.getCommands().typedCall.bind(this.device.getCommands()),
      this.postMessage,
      device,
      { payload: binary }
    );
  }
}