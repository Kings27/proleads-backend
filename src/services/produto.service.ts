import ProdutoRepository from "../repositories/produto.repository";

class ProdutoService {
    public static buscarTodosProdutos = () => {
        try {
            return ProdutoRepository.buscarTodosProdutos();
        } catch(e) {
            return null;
        }
    }
}

export default ProdutoService;