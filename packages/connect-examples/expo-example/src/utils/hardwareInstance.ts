import memoizee from 'memoizee';
import { Platform } from 'react-native';
import { ConnectSettings, CoreApi, LowLevelCoreApi } from '@onekeyfe/hd-core';
import { importSdk } from './importSdk';
import { CONNECT_SRC } from '../constants/connect';

// eslint-disable-next-line import/no-mutable-exports
let HardwareSDK: CoreApi;
let HardwareLowLevelSDK: LowLevelCoreApi;
let initialized = false;
const isNodeEnvironments = false;

export const getHardwareSDKInstance = memoizee(
  async () =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise<{
      HardwareSDK: CoreApi;
      HardwareLowLevelSDK: LowLevelCoreApi;
      useLowLevelApi: boolean;
    }>(
      // eslint-disable-next-line no-async-promise-executor
      async (resolve, reject) => {
        const useLowLevelApi = false;
        if (initialized) {
          resolve({ HardwareSDK, HardwareLowLevelSDK, useLowLevelApi });
          return;
        }

        const settings: Partial<ConnectSettings> = {
          debug: true,
          fetchConfig: true,
        };

        HardwareSDK = await importSdk();
        // HardwareSDK = await importTopLevelSdk();
        console.log(HardwareSDK);

        if (Platform.OS === 'web') {
          settings.connectSrc = CONNECT_SRC;
          settings.env = 'web';
          settings.preRelease = false;
          // HardwareLowLevelSDK = await importLowLevelSDK();

          // Override Connect src
          const { sdkConnectSrc } = window.ONEKEY_DESKTOP_GLOBALS ?? {};
          if (sdkConnectSrc) {
            settings.connectSrc = sdkConnectSrc;
          }

          console.log('======>>>>> Hardware SDK Init ConnectSrc:', settings.connectSrc);
        }

        try {
          await HardwareSDK.init(settings);
          // await HardwareSDK.init(settings, HardwareLowLevelSDK);
          console.log('HardwareSDK initialized success');
          initialized = true;

          resolve({ HardwareSDK, HardwareLowLevelSDK, useLowLevelApi });
        } catch (e) {
          reject(e);
        }
      }
    ),
  {
    promise: true,
    max: 1,
  }
);

export { HardwareSDK };
