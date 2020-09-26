const filmes = require('../model/lista-filmes.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(filmes);
};

module.exports = { getAll };