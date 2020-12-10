const lugares = require('../model/lista-lugares.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(lugares);
};

module.exports = { getAll }