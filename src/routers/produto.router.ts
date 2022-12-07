import { Router } from 'express';
import ProdutoController from '../controllers/produto.controller';

const router = Router();

router.get('/', ProdutoController.buscarTodosProdutos);

export default router;