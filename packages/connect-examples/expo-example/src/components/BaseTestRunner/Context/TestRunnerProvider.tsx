import { createContext, useMemo, useState } from 'react';

import type { Features } from '@onekeyfe/hd-transport';
import type { TestCase, TestCaseDataWithKey } from '../types';

export const TestRunnerContext = createContext<{
  runnerTestCaseTitle?: string;
  setRunnerTestCaseTitle?: React.Dispatch<React.SetStateAction<string>>;

  runnerDone?: boolean;
  setRunnerDone?: React.Dispatch<React.SetStateAction<boolean | undefined>>;

  runningDeviceFeatures?: Features;
  setRunningDeviceFeatures?: React.Dispatch<React.SetStateAction<Features>>;

  timestampBeginTest?: number;
  setTimestampBeginTest?: React.Dispatch<React.SetStateAction<number>>;

  timestampEndTest?: number;
  setTimestampEndTest?: React.Dispatch<React.SetStateAction<number>>;

  itemValues: TestCaseDataWithKey[];
  setItemValues?: React.Dispatch<React.SetStateAction<TestCaseDataWithKey[]>>;

  runnerLogs?: string[];
  setRunnerLogs?: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  itemValues: [],
});

export function TestRunnerProvider({ children }: { children: React.ReactNode }) {
  const [itemValues, setItemValues] = useState<TestCaseDataWithKey[]>([]);
  const [runnerLogs, setRunnerLogs] = useState<string[]>([]);
  const [runnerTestCaseTitle, setRunnerTestCaseTitle] = useState<string>();
  const [runnerDone, setRunnerDone] = useState<boolean>();
  const [runningDeviceFeatures, setRunningDeviceFeatures] = useState<Features>();
  const [timestampBeginTest, setTimestampBeginTest] = useState<number>();
  const [timestampEndTest, setTimestampEndTest] = useState<number>();

  const value = useMemo(
    () => ({
      itemValues,
      setItemValues,
      runnerTestCaseTitle,
      setRunnerTestCaseTitle,
      runnerDone,
      setRunnerDone,
      runningDeviceFeatures,
      setRunningDeviceFeatures,
      timestampBeginTest,
      setTimestampBeginTest,
      timestampEndTest,
      setTimestampEndTest,
      runnerLogs,
      setRunnerLogs,
    }),
    [
      itemValues,
      runnerDone,
      runnerLogs,
      runnerTestCaseTitle,
      runningDeviceFeatures,
      timestampBeginTest,
      timestampEndTest,
    ]
  );

  return <TestRunnerContext.Provider value={value}>{children}</TestRunnerContext.Provider>;
}
