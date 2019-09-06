const express = require('express');

const router = express.Router();

const operatorController = require('../controllers/operatorController');

router.post('/operator', operatorController.tambahOperator);

router.get('/operator', operatorController.ambilOperator);

router.put('/operator/:id', operatorController.ubahOperator);

router.delete('/operator/:id', operatorController.hapusOperator);

module.exports = router;