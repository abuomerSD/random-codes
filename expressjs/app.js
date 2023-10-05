const express = require('express');
const app = express();
const logg = require('./src/controllers/middleware');

app.use(logg.logReq);
// app.use(logg.errorHandler);

app.get('/', (req,res) => {
    res.json({
        "data": "test server",
    });
});

app.get('/blogs', (req,res) => {
    res.json({
        "data": "/blogs",
    });
});


app.listen(3000, ()=> {
    console.log('server is listening to requests');
});