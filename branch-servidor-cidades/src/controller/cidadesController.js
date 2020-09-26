const cidades = require('../model/lista-cidades-turisticas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(cidades);
}

const getByYear = (req, res) => {
    const anoVisitado = req.params.anoVisitado;

    res.send(cidades.find((cidade) => cidade.anoVisitado == anoVisitado));
};

module.exports = { getAll, getByYear }