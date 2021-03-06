const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/produtos', rotaProdutos);


app.use((req, res, next) => {
    res.header('Access-Control-Allw-Origin', '*') //No lugar do * pode se colocar um servidor específico
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-requested-With, Content-Type, Accept, Authorization'
    );
    
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();

})

//Quando a rota não é encontrada, vem parar aqui
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;