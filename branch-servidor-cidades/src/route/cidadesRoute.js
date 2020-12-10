const express = require('express');
const router = express.Router();
const controller = require('../controller/cidadesController');

router.get('/', controller.getAll);
router.get('/cidades/:anoVisitado', controller.getByYear);

module.exports = router;