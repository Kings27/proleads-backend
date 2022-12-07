import { Request, Response } from 'express';
import ProdutoService from '../services/produto.service';

class ProdutoController {
    public static buscarTodosProdutos = (req: Request, res: Response, next: any) => {
        try {
            const todosProdutos = ProdutoService.buscarTodosProdutos();
            res.send(todosProdutos);
        } catch(e) {
            console.log("iih mane, deu erro aqui ein");
            next();
        }
    }
}

export default ProdutoController;