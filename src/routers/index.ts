import { Request, Response, Router } from 'express';
import produto from './produto.router'

const routes = Router();
routes.use('/v1/produto', produto);

export { routes };