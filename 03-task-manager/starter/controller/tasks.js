const getAllTasks = (req, res) => {
  res.send(`Get all Tasks`);
};

const postTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
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
