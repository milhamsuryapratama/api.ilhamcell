const Transaksi = require('../models/transaksiModel');

exports.tambahTransaksi = (req, res, next) => {
  const { nama, nomorHp, operatorId, nominalId, status } = req.body;

  const transaksi = new Transaksi({ nama, nomorHp, operatorId, nominalId, status });

  transaksi
      .save()
      .then(result => {
          res.status(201).json(result);
      })
      .catch(error => {
          console.log(error);
      })
};

exports.ambilTransaksi = (req, res, next) => {
    Transaksi
        .find()
        .select('_id nama nomorHp status')
        .populate({
            path: 'operatorId',
            model: 'operator',
            select: '_id nama'
        })
        .populate({
            path: 'nominalId',
            model: 'nominal',
            select: '_id nama'
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.ubahTransaksi = (req, res, next) => {
    const id = req.params.id;
    const { nama, nomorHp, operatorId, nominalId, status } = req.body;

    Transaksi
        .findById(id)
        .then(transaksi => {
            transaksi.nama = nama;
            transaksi.nomorHp = nomorHp;
            transaksi.operatorId = operatorId;
            transaksi.nominalId = nominalId;
            transaksi.status = status;
            transaksi.save();
            res.status(200).json(transaksi);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.hapusTransaksi = (req, res, next) => {
    const id = req.params.id;

    Transaksi
        .findByIdAndRemove(id)
        .then(() => {
            res.status(200).json({ "pesan": "sukses menghapus data" });
        })
        .catch(error => {
            console.log(error);
        })
};