const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.use('/test', (req,res) => {
    res.send('platform is up and running');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})