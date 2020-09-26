const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Lista de algumas das cidades turísticas as quais já visitei"
    })
})

module.exports = router;