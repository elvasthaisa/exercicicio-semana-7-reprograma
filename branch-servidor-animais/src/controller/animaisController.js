const animais = require('../model/lista-animais.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(animais);
};

const getById = (req, res) => {
    const id = req.params.id;

    res.send(animais.find((animal) => animal.id == id));
};

module.exports = { getAll, getById };