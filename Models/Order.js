const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["notComplete", "completed", "cancelled"],
    default: "notComplete",
  },
  totalPrice: { type: Number, default: 0 },
});

const ordermodel = mongoose.model("Order", orderSchema);
module.exports = ordermodel;
