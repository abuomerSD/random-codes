const express = require('express');

const app = express();
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

app.use(express.json())

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

const users = [
    {
        username:"Eltayeb",
        password: "password"
    }
]
const port = process.env.PORT;
const url = process.env.database_url;
// console.log(url, port);

app.get('/users', (req, res)=> {
    res.json(users);
})

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = {username: req.body.username, password: hashedPassword}
        users.push(user);
        res.status(201).json(user);
        
    } catch (error) {
        res.send(error.message);
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username = req.body.username);
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try {
        if( await bcrypt.compare(req.body.password, user.password))
            res.send('login success')
        else 
            res.send('enter the password correctly')

    } catch (error) {
        
    }
})

app.listen(port, ()=> {
    console.log(`Server is Listening to requests at port ${port}`);
})