const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Esta é uma wishlist de alguns dos lugares que eu adoraria visitar no mundo aka futuros destinos preferidos",
        data: "26/09/2020"
    })
})

module.exports = router;