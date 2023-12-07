const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config();

const posts = [
    {
        userName: "Eltayeb",
        title: "Post 1"
    },
    {
        userName: "Ahmed",
        title: "Post 2"
    }
]
const port = process.env.PORT;
const url = process.env.database_url;
// console.log(url, port);

app.get('/posts', (req, res)=> {
    res.json(posts);
})

app.listen(port, ()=> {
    console.log(`Server is Listening to requests at port ${port}`);
})