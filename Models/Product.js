const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 10 },
  description: { type: String, minlength: 10, maxlength: 300 },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
});

const productmodel = mongoose.model("Product", productSchema);
module.exports = productmodel;
