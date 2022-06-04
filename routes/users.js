const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todoapp')

const taskSchema = mongoose.Schema({
    task: String,
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user' , taskSchema)
