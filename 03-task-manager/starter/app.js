const express = require("express");
const app = express();
const connectDb = require("./db/connection");
// .env url
require("dotenv").config();

const tasks = require("./routers/tasks");
const port = 3000;

//middle Ware
app.use(express.static("./public"));
app.use(express.json());

//Route
app.use("/api/v1/tasks", tasks);

//Connect DB and Start the Server
const start = async () => {
  try {
    await connectDb(process.env.mongo_URI);
    app.listen(port, () => {
      console.log(`Server Started on Port 3000 ......`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
