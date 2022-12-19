const connectDB = require('./database/db');
const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute')

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(userRoute)
module.exports = app;
