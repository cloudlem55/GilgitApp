const mongoose = require('mongoose');
const employeeUser = mongoose.model('EmployeeData')

const util = require('util');
module.exports.Register = (req, res, nex) => {
    // util.inspect(req.body)
    console.log(`testing str`, util.inspect(req));
    
    var user = new employeeUser();
    user.name = req.body.name;
    user.fatherName = req.body.fatherName;
    user.cnic = req.body.cnic;
    user.contactNo = req.body.contactNo;
    user.currentAddress = req.body.currentAddress;
    user.permenantAddress = req.body.permenantAddress;
    user.save((err, data) => {
        if(!err) {
            res.send(data)
        }else{
            res.send(err)
        }
    })
}