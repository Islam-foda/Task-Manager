// start func to connect to DB
// await the connection to DB (require the dotenv & connectionDB)
// await delete if there is a old data
// populate the new DB (will require the modelSchema & Product JSON)
// exit if success

require("dotenv").config();
const connectDb = require("./db/connect");
const productModel = require("./models/product");
const Product = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(Product);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
