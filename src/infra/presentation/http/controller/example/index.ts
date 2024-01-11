import { Request, Response } from 'express';
import { errorResponse, makeResponse } from '../../helper';

export function exampleController(req: Request, res: Response) {
  try {
    return makeResponse(res, { message: 'seja bem-vindo a rota de exemplo' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
}
