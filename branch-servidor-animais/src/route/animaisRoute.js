const express = require('express');
const router = express.Router();
const controller = require('../controller/animaisController');

router.get('/', controller.getAll);
router.get('/animais', controller.getAll);
router.get('/animais/:id', controller.getById);

module.exports = router;