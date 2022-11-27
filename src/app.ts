const params = require('strong-params');
import bodyParser from 'body-parser';
import express from 'express';
import { middlewares } from './middlewares/handler.error';
import { routes as apiRoutes } from './routers/index';
const app = express();

console.log("entrou aq")

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(params.expressMiddleware());

app.use('/api', apiRoutes);
app.get('/health', (req, res) => res.json({ status: true, message: 'Health OK!' }));

app.use((req, res, next) => {
    const err = new Error("Não Encontrado");
    res.statusCode = "404";
    res.send(err.message);
});

app.use(middlewares.handleRequestError);

export { app };