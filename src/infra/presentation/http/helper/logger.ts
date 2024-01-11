import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({
      dirname: 'logs',
      filename: 'debug.log',
      level: 'info',
    }),
    // ****************************************************************
    // ENABEL WHEN LOKI BE AVAILABLE
    // ****************************************************************
    // new LokiTransport({
    //   format: format.json(),
    //   host: 'http://host.docker.internal:3100',
    //   json: true,
    //   labels: { app: 'api-school-lite' },
    //   onConnectionError: (err: any) => console.error(err),
    //   replaceTimestamp: true,
    // }),
  ],
});
