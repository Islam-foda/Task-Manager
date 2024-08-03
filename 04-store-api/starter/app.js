const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errHandler = require("./middleware/error-handler");
const port = process.env.port || 4040;

//middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Product Page`);
});

app.use(notFound);
app.use(errHandler);

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
