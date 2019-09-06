const Operator = require('../models/operatorModel');

exports.tambahOperator = (req, res, next) => {
    const { nama } = req.body;
    const operator = new Operator({ nama });

    operator
        .save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.ambilOperator = (req, res, next) => {
    Operator
        .find()
        .select('_id nama')
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.ubahOperator = (req, res, next) => {
    const nama = req.body.nama;
    const id = req.params.id;

    Operator
        .findById(id)
        .then(operator => {
            operator.nama = nama;
            operator.save();
            res.status(200).json(operator);
        })
        .catch(error => {
            console.log(error);
        })
};

exports.hapusOperator = (req, res, next) => {
    const id = req.params.id;

    Operator
        .findByIdAndRemove(id)
        .then(result => {
            res.status(200).json({ "pesan": "sukses menghapus data" });
        })
        .catch(error => {
            console.log(error);
        })
};
