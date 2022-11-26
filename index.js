const express = require('express')
const app = express()
const router = import('./src/router/router')

//app.use(router)

let port = 5000;

// servidor á escuta no porto 5000
app.listen(process.env.port || port, () =>{
    console.log('Servidor em execução no porto: '+ port);
});


