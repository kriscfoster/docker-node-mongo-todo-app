const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false
  },
});

const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = { ToDo };
