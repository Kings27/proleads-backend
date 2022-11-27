const middlewares = {
    handleRequestError(error: any, req: any, res: any, next: any) {
        res.status(500).json({
            success: false, error: "Erro interno do Servidor", statusCode: 500,
        });
        res.end();
    }
};

export { middlewares };