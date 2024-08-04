const express = require("express");
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");

const route = express.Router();

route.route("/").get(getAllProducts);
route.route("/static").get(getAllProductsStatic);

module.exports = route;
