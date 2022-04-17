const mongoose = require('mongoose');

const AddEmployee = new mongoose.Schema({
    
    name: {
        type: String,
        // required: true
    },
    fatherName: {
        type: String,
        // required: true
    },
    cnic:{
        type: String,
        // required: true
    },
    contactNo: {
        type: String,
        // required: true
    },
    currentAddress:{
        type:String,
        // required: true
    },
    permenantAddress: {
        type: String,
        // required: true
    }
    
});
// const Employee = new mongoose.model("EmployeeData",AddEmployee);
module.exports = mongoose.model('EmployeeData', AddEmployee)
// module.exports = mongoose.model('WebMainUser', MainUser);

// module.exports = Employee;