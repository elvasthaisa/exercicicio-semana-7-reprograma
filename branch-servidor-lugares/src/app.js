const express = require('express');
const app = express();

// Importando os arquivos de rota
const index = require('./route/index');
const lugares = require('./route/lugaresRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/lugares', lugares);

module.exports = app;