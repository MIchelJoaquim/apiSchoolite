/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { logger } from '../helper/logger';

const getDurationInMilliseconds = (start: any) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

export const logResponseTime = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = process.hrtime();
  const method = req.method;
  const url = req.url;

  res.on('finish', function () {
    const time = getDurationInMilliseconds(start);
    const status = res.statusCode;

    if (status > 299)
      logger.error({
        labels: { origin: 'api-school-lite' },
        message: `method=${method} url=${url} status=${status} duration=${time}ms`,
      });
    else
      logger.info({
        labels: { origin: 'api-school-lite' },
        message: `method=${method} url=${url} status=${status} duration=${time}ms`,
      });
  });

  next();
};
