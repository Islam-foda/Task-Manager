const Task = require("../models/model");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getTask = async (req, res) => {
  try {
    const snglTask = await Task.findOne({ _id: req.params.id });
    res.status(200).json({ Task: snglTask });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const updateTask = (req, res) => {
  res.send(`Edit the tasks`);
};

const delTask = (req, res) => {
  res.send(`Delete the tasks`);
};

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  delTask,
};
