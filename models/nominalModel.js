const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const nominalSchema = new Schema({
    nama: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('nominal', nominalSchema);