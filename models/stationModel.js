const mongoose = require('mongoose');
const { schema } = require('./AddEmployee');


const station = new mongoose.Schema({
    _id: {
        type: String,
        required : true
    },

    stationName:{
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    contactNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('stations', station);