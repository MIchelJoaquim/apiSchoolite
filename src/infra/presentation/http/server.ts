import app from './app';
import { createServer } from 'http';
import { env } from 'process';
import { logger } from './helper/logger';

const PORT: string | number = env.PORT || 4000;

const httpServer = createServer(app);

httpServer.listen(`${PORT}`, () =>
  logger.info(`Server running o n http://localhost:${PORT}`)
);

export default httpServer;
