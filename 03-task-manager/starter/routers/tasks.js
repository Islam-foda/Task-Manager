const express = require("express");
const {
  getAllTasks,
  postTask,
  delTask,
  updateTask,
  getTask,
} = require("../controller/tasks");

const tasks = express.Router();

tasks.route("/").get(getAllTasks).post(postTask);

tasks.route("/:id").get(getTask).patch(updateTask).delete(delTask);

module.exports = tasks;
