const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, default: 0 },
});

const cartmodel = mongoose.model("Cart", cartSchema);
module.exports = cartmodel;
