"use strict";
import * as http from 'http';
import { app } from './app';

const server = http.createServer(app).listen(parseInt(process.env.PORT || '5000', 10));
// CONEXAO COM MONGOOSE VEM AQUI