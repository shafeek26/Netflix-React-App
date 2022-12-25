const connectDB = require('./database/db');
const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const cors = require('cors');

connectDB()
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors())
app.use('/api',userRoute)
module.exports = app;
