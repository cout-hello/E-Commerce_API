const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, min: 1, required: true },
});

const cartItemmodel = mongoose.model("cartItem", cartItemSchema);
module.exports = cartItemmodel;
