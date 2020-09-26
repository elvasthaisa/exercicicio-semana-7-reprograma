const bandas = require('../model/lista-bandas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(bandas);
}

module.exports = { getAll }