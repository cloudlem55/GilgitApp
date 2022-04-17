const mongoose = require('mongoose');
const stationModel = require('../models/stationModel');

module.exports.station = (req, res, next) => {
    var user = new stationModel();
    user._id = req.body._id;
    user.stationName = req.body.stationName;
    user.address = req.body.address;
    user.contactNo = req.body.contactNo;
    user.save((err, data) => {
        if(!err) {
            res.send(data)
        }
        else {
            res.send(err)
        }
    })
}