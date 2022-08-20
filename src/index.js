const express = require('express')
require('./db/mongoose')
const User = require('./models/user');
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.get('/users',  async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

app.get('/user/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id);
        if (!user)
            res.send(404).send(user);
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})
app.post('/users', async (req, res) => {
    const user =  new User(req.body);
    try {
        await user.save()
        res.send(user)
    } catch (e) {
         res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/task/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id);
        if (!task)
            res.send(404).send(task)
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    const task =  new task(req.body);
    try {
       await  task.save()
        res.send(task)
    } catch (e) {
         res.status(400).send(e)
    }
})


app.get('/', (req, res) => {
    res.send('welcome to task manager server')
})


app.listen(port, () => {
    console.log('server is up and running on port ' + port);
})