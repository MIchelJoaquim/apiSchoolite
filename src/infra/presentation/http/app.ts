import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { logResponseTime } from './middleware/responseTimeLogger';
import { logger } from './helper/logger';
import routes from './routes';

dotenv.config();

const app: Express = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.disable('x-powered-by');
app.use(logResponseTime);
app.use('/api/v1', cors({ origin: '*' }), routes);

app.use((_req: Request, res: Response) => {
  logger.error('Rota não encontrada');
  res.status(404);
  res.send({ msg: 'Lamentamos, o recurso não existe' });
});

export default app;
