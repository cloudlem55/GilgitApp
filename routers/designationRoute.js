const express = require('express');
const user = require('../models/designatnModel');
const designationRoute = express.Router();
const cntrlDesignation = require('../controllers/designatnContrl');

designationRoute.post('/designation', cntrlDesignation.designation);
module.exports = designationRoute;