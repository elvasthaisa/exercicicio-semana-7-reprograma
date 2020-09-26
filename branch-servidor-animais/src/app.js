const express = require('express');
const app = express();

// Importando os arquivos da rota 
const index = require('./route/index');
const animais = require('./route/animaisRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
});

app.use('/', index);
app.use('/animais', animais);

module.exports = app;