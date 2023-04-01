import app from './app';
import { createServer } from 'http';
import { env } from 'process';

const PORT: string | number = env.PORT || 4000;

const httpServer = createServer(app);

httpServer.listen(`${PORT}`, () =>
  console.log(`Server running o n http://localhost:${PORT}`)
);

export default httpServer;
