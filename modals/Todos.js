const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    done: { type: Boolean, default: false }  // Default value for completed is false
})

const ToodoModal = mongoose.model("todos",TodoSchema);

module.exports = ToodoModal;