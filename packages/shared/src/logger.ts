type LogMessage = {
  level: string;
  prefix: string;
  message: any[];
  timestamp: number;
};

type LoggerFn = (...data: any[]) => void;
type LoggerMoreParams = (message?: any, ...optionalParams: any[]) => void;

type Logger = {
  debug: LoggerFn | LoggerMoreParams;
  info: LoggerFn | LoggerMoreParams;
  warn: LoggerFn | LoggerMoreParams;
  error: LoggerFn | LoggerMoreParams;
};

const MAX_ENTRIES = 100;

class Log {
  prefix: string;

  enabled: boolean;

  messages: LogMessage[];

  logger?: Logger;

  constructor(prefix: string, enabled: boolean, logger?: Logger) {
    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    if (logger) {
      this.logger = logger;
    }
  }

  addMessage(level: string, prefix: string, ...args: any[]) {
    this.messages.push({
      level,
      prefix,
      message: args,
      timestamp: new Date().getTime(),
    });
    if (this.messages.length > MAX_ENTRIES) {
      this.messages.shift();
    }
  }

  log(...args: any[]) {
    this.addMessage('log', this.prefix, ...args);
    if (!this.enabled) {
      return;
    }
    if (this.logger) {
      this.logger.info(this.prefix, ...args);
    } else {
      console.log(this.prefix, ...args);
    }
  }

  error(...args: any[]) {
    this.addMessage('error', this.prefix, ...args);
    if (!this.enabled) {
      return;
    }
    if (this.logger) {
      this.logger.error(this.prefix, ...args);
    } else {
      console.error(this.prefix, ...args);
    }
  }

  warn(...args: any[]) {
    this.addMessage('warn', this.prefix, ...args);
    if (!this.enabled) {
      return;
    }
    if (this.logger) {
      this.logger.warn(this.prefix, ...args);
    } else {
      console.warn(this.prefix, ...args);
    }
  }

  debug(...args: any[]) {
    this.addMessage('debug', this.prefix, ...args);
    if (!this.enabled) {
      return;
    }
    if (this.logger) {
      this.logger.debug(this.prefix, ...args);
    } else {
      console.log(this.prefix, ...args);
    }
  }
}

const _logs: { [k: string]: Log } = {};

export const initLog = (prefix: string, enabled?: boolean, logger?: Logger) => {
  const instance = new Log(prefix, !!enabled, logger);
  _logs[prefix] = instance;
  return instance;
};

export const enableLog = (enabled?: boolean) => {
  Object.keys(_logs).forEach(key => {
    _logs[key].enabled = !!enabled;
  });
};

export const setOutsideLogger = (logger: Logger) => {
  Object.keys(_logs).forEach(key => {
    _logs[key].logger = logger;
  });
};

export const enableLogByPrefix = (prefix: string, enabled: boolean) => {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
};

export const getLog = () => {
  let logs: LogMessage[] = [];
  Object.keys(_logs).forEach(key => {
    logs = logs.concat(_logs[key].messages);
  });
  logs.sort((a, b) => a.timestamp - b.timestamp);
  return logs;
};