const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const operatorSchema = new Schema({
    nama: {
        type: String,
        required: true
    }
    // nominalId: {
    //     type: Schema.Types.ObjectID,
    //     ref: 'nominal',
    //     required: true
    // }
});

module.exports = mongoose.model('operator', operatorSchema);