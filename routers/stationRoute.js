const express = require('express');
const users = require('../models/stationModel');
const stationRoute = express.Router();
const cntrlStation = require('../controllers/stationControler');

stationRoute.post('/station', cntrlStation.station);
module.exports = stationRoute;