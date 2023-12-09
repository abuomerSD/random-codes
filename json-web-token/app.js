const express = require('express');

const app = express();
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json())

const posts = [
    {
        username: "Eltayeb",
        title: "Post 1"
    },
    {
        username: "Ahmed",
        title: "Post 2"
    },
    {
        username: "Emad",
        title: "Post 3"
    },
    {
        username: "Emad",
        title: "Post 4"
    }
]

const users = [
    {
        username:"Eltayeb",
        password: "password"
    }
]
const port = process.env.PORT;
const url = process.env.database_url;
// console.log(url, port);

// app.get('/users', (req, res)=> {
//     res.json(users);
// })

// app.post('/users', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         const user = {username: req.body.username, password: hashedPassword}
//         users.push(user);
//         res.status(201).json(user);
        
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.post('/users/login', (req, res) => {
//     const user = users.find(user => user.username = req.body.username);
//     if(user == null){
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//         if(bcrypt.compare(req.body.password, user.password))
//             res.send('login success')
//         else 
//             res.send('enter the password correctly')

//     } catch (error) {
        
//     }
// })

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.username));
})

app.post('/login', (req, res) => {
    // authenticate user
    const username = req.body.username;
    const user = {username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken});
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(port, ()=> {
    console.log(`Server is Listening to requests at port ${port}`);
})