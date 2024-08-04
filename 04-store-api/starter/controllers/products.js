const productModel = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const getProduct = await productModel.find();
  res.status(200).json({ getProduct });
};

const getAllProducts = async (req, res) => {
  //   throw new Error("error in the testing");
  await res.status(200).json({ msg: "Route Products" });
};

module.exports = { getAllProducts, getAllProductsStatic };
