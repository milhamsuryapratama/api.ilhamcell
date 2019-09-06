const Nominal = require('../models/nominalModel');

exports.tambahNominal = (req, res, next) => {
    // const n = req.body.nn;
    const nama = req.body.nama;
    const nominal = new Nominal({ nama });
    // console.log(nominal);
    nominal
        .save()
        .then(result => {
            // console.log(result);
            res.status(201).json({ "pesan": "sukses menambah data nominal" });
        })
        .catch(error => {
            console.log(error);
        })
};

exports.ambilNominal = (req, res, next) => {
    Nominal
        .find()
        .select('_id nama')
        .then(nominal => {
            res.status(200).json(nominal);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.ubahNominal = (req, res, next) => {
  const nama = req.body.nama;
  const id = req.params.id;

  Nominal
      .findById(id)
      .then(nominal => {
          nominal.nama = nama;
          nominal.save();
          return res.status(200).json({ "pesan": "sukses mengubah data" });
      })
      .catch(error => {
          console.log(error);
      })
};

exports.hapusNominal = (req, res, next) => {
    const id = req.params.id;

    Nominal
        .findByIdAndRemove(id)
        .then(result => {
            res.status(200).json({ "pesan": "sukses menghapus data" });
        })
        .catch(error => {
            console.log(error);
        })
};