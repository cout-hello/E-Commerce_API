const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 10 },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  password: {
    type: String,
    select: false,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

//fisrt parameter is model name in mongoose
const usermodel = mongoose.model("User", userSchema);
module.exports = usermodel;
