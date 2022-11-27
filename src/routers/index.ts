import { Request, Response, Router } from 'express';
import teste from './test.router';

const routes = Router();

routes.use('/v1/test', teste);

export { routes };