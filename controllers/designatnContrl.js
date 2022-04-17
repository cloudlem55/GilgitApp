const mongoose = require('mongoose');
const designationModel = require('../models/designatnModel');

module.exports.designation = (req, res, next) => {
    var user = new designationModel();
    user._id = req.body._id;
    user.title = req.body.title;
    user.description = req.body.description;

    user.save((err, data) => {
        if(!err) {
            res.json(data)
        }
        else{
            res.json(err)
        }
    })
}