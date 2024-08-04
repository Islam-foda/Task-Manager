const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product Price must be provided"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  feaured: {
    type: Boolean,
    default: false,
  },
  creatAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VLAUE} is not found",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
