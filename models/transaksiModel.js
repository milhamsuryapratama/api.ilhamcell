const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transaksiSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    nomorHp: {
        type: String,
        required: true
    },
    operatorId: {
        type: Schema.Types.ObjectID,
        ref: 'operator',
        required: true
    },
    nominalId: {
        type: Schema.Types.ObjectID,
        ref: 'nominal',
        required: true
    },
    status: {
        type: String,
        enum: ['HUTANG', 'LUNAS'],
        default: 'LUNAS',
        required: true
    }
});

module.exports = mongoose.model('transaksi', transaksiSchema);