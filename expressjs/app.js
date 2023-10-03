const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.json({
        "data": "test server",
    });
})

app.listen(3000, ()=> {
    console.log('server is listening to requests');
})