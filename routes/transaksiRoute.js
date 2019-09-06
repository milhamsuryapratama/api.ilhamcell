const expess = require('express');

const router = expess.Router();

const transaksiController = require('../controllers/transaksiController');

router.post('/transaksi', transaksiController.tambahTransaksi);

router.get('/transaksi', transaksiController.ambilTransaksi);

router.put('/transaksi/:id', transaksiController.ubahTransaksi);

router.delete('/transaksi/:id', transaksiController.hapusTransaksi);

module.exports = router;