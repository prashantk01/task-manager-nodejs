const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-nodejs', {
    useNewUrlParser: true,
    // below code is umsupported for vmongodb > 6
    // useCreateIndex: true 
}).then(() => {
    console.log("database connected")
}).catch((e) => {
    console.log("we got error: "+e)
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Sleep time'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})