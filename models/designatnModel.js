const mongoose = require('mongoose');

const AddDesignation = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    title: {
        type : String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Designation', AddDesignation);