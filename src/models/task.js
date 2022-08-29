const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

/**
 * timestamps set true creates: createdAt and updatedAt schema fields and update time accordingly
 */
taskSchema.set("timestamps", true);

const Task = mongoose.model('Task', taskSchema)

module.exports = Task