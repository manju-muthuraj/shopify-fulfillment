import { createLogger, format, transports } from 'winston';

export const log = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [new transports.Console()],
});
