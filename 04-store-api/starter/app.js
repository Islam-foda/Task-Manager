require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errHandler = require("./middleware/error-handler");
const port = process.env.port || 4040;
const routeProducts = require("./routes/products");

//middleware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.status(200).send(`Welcome to Home Page`);
});

app.use("/api/v1/products", routeProducts);

app.use(notFound);
app.use(errHandler);

//start server while connecting to DB
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is Listiening to Port ${port}...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
