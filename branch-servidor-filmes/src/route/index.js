const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.url);

    res.send({
        titulo: "Alguns dos meus filmes preferidos",
        data: "22/09/2020"
    })
});

module.exports = router;