const moongose = require("mongoose");

const Schema = moongose.Schema;

const pegawaiSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    telepon: {
        type: String,
        required: true
    }
});

module.exports = moongose.model('pegawai', pegawaiSchema);