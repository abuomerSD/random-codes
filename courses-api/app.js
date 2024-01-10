const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middlewares/log');
const status = require('./utils/httpStatus');
const {init} = require('./database/database');

// create database tables
init();

app.use(logger);

app.get('/', (req, res)=> {
    // resSender.success("test");
    res.json({status:status.SUCCESS, data:"test"});
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server is Listening to requests at port ${process.env.PORT}`);
});