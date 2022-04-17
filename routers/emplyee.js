const express = require('express');
const users = require('../models/AddEmployee');
const addingEnployee = express.Router();
const ctrlUser = require('../controllers/employeeControler')



addingEnployee.post('/RegisterUser', ctrlUser.Register);
module.exports = addingEnployee;