const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Lista de alguns animais de países diferentes",
        data: "22/09/2020"
    });
});

module.exports = router;