"use strict";
import * as http from 'http';
import { app } from './app';
import * as mongoose from "mongoose";


const server = http.createServer(app).listen(parseInt(process.env.PORT || '5000', 10));
// CONEXAO COM MONGOOSE VEM AQUI

//Senha 45YIXN9I4cVkUWgC
//170.83.162.217/32 My IP Address

mongoose.connect('mongodb+srv://proleads:45YIXN9I4cVkUWgC@proleadscluster.v3t02mb.mongodb.net/test').then(() => {
    console.log("conectamos ao mongodb")
})


