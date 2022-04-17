const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const users = require("./models/AddEmployee");
const employee = require("./models/AddEmployee");
const stationUser = require('./models/stationModel')
const bodyParser = require('body-parser')
// const employeeRouter = require("./routers/AddEmployeeRoute");
const cors = require('cors');


const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
// app.use(employeeRouter);

// database connection
mongoose.connect('mongodb://localhost:27017/MernDB', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log('database is connected sucessfully');
})

const northEmployee = require("./routers/emplyee");
app.use('/api', northEmployee)

const adminRouter = require('./routers/AdminRouter');
app.use('/user', adminRouter)

const station = require('./routers/stationRoute');
app.use('/users', station);

const designation = require('./routers/designationRoute');
app.use('/user', designation);

// PORT
const PORT = process.env.PORT || 16000;

app.listen(PORT, () => {
  console.log(`server is running at port localhost://${PORT}`);
})