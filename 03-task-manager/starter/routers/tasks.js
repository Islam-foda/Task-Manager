const express = require("express");
const {
  getAllTasks,
  postTask,
  patchTask,
  delTask,
  updateTask,
  getTask,
} = require("../controller/tasks");

const tasks = express.Router();

tasks.get("/", (req, res) => {
  res.send(`get all tasks`);
});
tasks.route("/").get(getAllTasks).post(postTask);
tasks.route("/:id").get(getTask).patch(updateTask).delete(delTask);

module.exports = tasks;
