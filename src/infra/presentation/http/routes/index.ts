import { ROUTES } from './constants';
import { Router } from 'express';
import { exampleController } from '../controller/example';

const exampleRoutes = Router();

exampleRoutes.get(ROUTES.example, exampleController);

const example = exampleRoutes;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any[] = [example];

export default routes;
