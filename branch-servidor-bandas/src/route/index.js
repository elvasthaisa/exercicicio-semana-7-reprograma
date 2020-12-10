const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Algumas das minhas bandas preferidas",
        data: "26/09/2020"
    })
});

module.exports = router;