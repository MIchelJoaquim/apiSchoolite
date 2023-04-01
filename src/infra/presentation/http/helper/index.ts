import { Response } from 'express';

export const HTTP = {
  BAD_REQUEST: 400,
  CREATED: 201,
  FORBIDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTED: 406,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  NO_CONTENT: 204,
  SUCCESS: 200,
  UNAUTHORIZED: 401,
};

export const errorResponse = (
  res: Response,
  error?: string,
  status: number = HTTP.INTERNAL_SERVER_ERROR,
  errorCode?: number
) =>
  res.status(status).json({
    error,
    errorCode: errorCode || status,
    msg: error || 'Lamentamos, infelizmente ocorreu um erro',
  });

export const makeResponse = (
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataResponse: any,
  msg?: string,
  status: number = HTTP.SUCCESS
) =>
  res.status(status).send({
    payload: dataResponse,
  });
