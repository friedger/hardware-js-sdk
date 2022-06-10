import React, { View, StyleSheet, Text } from 'react-native';
import type { Device } from './DeviceList';
import MethodInvoke from './MethodInvoke';

type CallDeviceMethodsProps = {
  SDK: any;
  selectedDevice: Device | null;
};

export function CallDeviceMethods({ SDK, selectedDevice: currentDevice }: CallDeviceMethodsProps) {
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Device Method Test</Text>
      <View style={styles.buttonContainer}>
        <MethodInvoke
          title="deviceBackup"
          options={[]}
          onCall={data =>
            SDK.deviceBackup({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceChangePin"
          options={[{ name: 'remove', value: undefined, type: 'boolean' }]}
          onCall={data =>
            SDK.deviceChangePin({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceFlags"
          options={[{ name: 'flags', value: undefined, type: 'number' }]}
          onCall={data =>
            SDK.deviceFlags({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceRebootToBootloader"
          options={[]}
          onCall={data =>
            SDK.deviceRebootToBootloader({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceUpdateReboot"
          options={[]}
          onCall={data =>
            SDK.deviceUpdateReboot({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceRecovery"
          options={[
            { name: 'wordCount', value: undefined, type: 'number' },
            { name: 'passphraseProtection', value: undefined, type: 'boolean' },
            { name: 'pinProtection', value: undefined, type: 'boolean' },
            { name: 'language', value: undefined, type: 'string' },
            { name: 'label', value: undefined, type: 'string' },
            { name: 'enforceWordlist', value: undefined, type: 'boolean' },
            { name: 'type', value: undefined, type: 'string' },
            { name: 'u2fCounter', value: undefined, type: 'number' },
            { name: 'dryRun', value: undefined, type: 'boolean' },
          ]}
          onCall={data =>
            SDK.deviceRecovery({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceReset"
          options={[
            { name: 'displayRandom', value: undefined, type: 'boolean' },
            { name: 'strength', value: undefined, type: 'number' },
            { name: 'passphraseProtection', value: undefined, type: 'boolean' },
            { name: 'pinProtection', value: undefined, type: 'boolean' },
            { name: 'language', value: undefined, type: 'string' },
            { name: 'label', value: undefined, type: 'string' },
            { name: 'u2fCounter', value: undefined, type: 'number' },
            { name: 'skipBackup', value: undefined, type: 'boolean' },
            { name: 'noBackup', value: undefined, type: 'boolean' },
            { name: 'backupType', value: undefined, type: 'string' },
          ]}
          onCall={data =>
            SDK.deviceReset({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceSettings"
          options={[
            { name: 'language', value: undefined, type: 'string' },
            { name: 'label', value: undefined, type: 'string' },
            { name: 'usePassphrase', value: undefined, type: 'boolean' },
            { name: 'homescreen', value: undefined, type: 'string' },
            { name: 'passphraseSource', value: undefined, type: 'number' },
            { name: 'autoLockDelayMs', value: undefined, type: 'number' },
            { name: 'displayRotation', value: undefined, type: 'number' },
            { name: 'passphraseAlwaysOnDevice', value: undefined, type: 'boolean' },
            { name: 'safetyChecks', value: undefined, type: 'string' },
            { name: 'experimentalFeatures', value: undefined, type: 'boolean' },
          ]}
          onCall={data =>
            SDK.deviceSettings({
              device: { ...currentDevice },
              ...data,
            })
          }
        />

        <MethodInvoke
          title="deviceWipe"
          options={[]}
          onCall={data =>
            SDK.deviceWipe({
              device: { ...currentDevice },
              ...data,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});