const express = require('express');

const router = express.Router();

const nominalController = require('../controllers/nominalController');

router.post('/nominal', nominalController.tambahNominal);

router.get('/nominal', nominalController.ambilNominal);

router.put('/nominal/:id', nominalController.ubahNominal);

router.delete('/nominal/:id', nominalController.hapusNominal);

module.exports = router;