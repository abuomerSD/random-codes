const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middlewares/log');
// const status = require('./utils/resSender');
const {init} = require('./database/database');
const {errorHandler} = require('./middlewares/errorHandler');
const courseRouter = require('./routes/courseRoute');

// create database tables
init();

app.use(express.json());

app.use(logger);

app.use('/courses', courseRouter);
app.use(errorHandler);

app.listen(process.env.PORT, ()=> {
    console.log(`Server is Listening to requests at port ${process.env.PORT}`);
});