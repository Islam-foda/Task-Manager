const mongoose = require("mongoose");

const conectDb = (url) => {
  mongoose.connect(url);
};

module.exports = conectDb;
