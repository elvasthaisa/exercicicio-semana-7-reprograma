const express = require('express');
const app = express();

// Importando os arquivos de rota
const index = require('./route/index');
const cidades = require('./route/cidadesRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/cidades', cidades);

module.exports = app;