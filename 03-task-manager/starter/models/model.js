const { default: mongoose } = require("mongoose");
const Task = require("mongoose");

//Creat Tasks Schema
const taskSchema = new Task.Schema({
  // schema Validation
  name: {
    type: String,
    required: [true, "You must input a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 charachters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
