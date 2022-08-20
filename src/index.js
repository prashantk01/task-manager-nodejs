const express = require('express')
require('./db/mongoose')
const User = require('./models/user');
const Task = require("./models/task")

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

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        console.log(tasks);
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/task/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task)
            res.send(404).send(task)
        console.log(task);
        res.send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.get('/', (req, res) => {
    res.send('hi postman')
})


app.listen(port, () => {
    console.log('server is up and running on port ' + port);
})