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
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no Task with the Id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no Task with the Id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ error: ` ${err}` });
  }
};

const delTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const delTask = await Task.findOneAndDelete({ _id: taskId });
    if (!delTask) {
      return res
        .status(404)
        .json({ msg: `no Task with the Id ${req.params.id}` });
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  delTask,
};
