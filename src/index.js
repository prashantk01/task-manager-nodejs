const express = require('express')
require('./db/mongoose')
const User = require('./models/user');


const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.post('/users', (req, res) => {
    const user = req.body
    const result = new User(user);
    result.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    });
})


app.get('/', (req, res) => {
    res.send('hi postman')
})


app.listen(port, () => {
    console.log('server is up and running on port ' + port);
})