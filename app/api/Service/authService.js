// userData its (req.body)
const usermodel = require("../Models/user");
const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(10)
    .pattern(/^[A-Za-z]+$/)
    .required(),
  username: Joi.string()
    .pattern(/^[A-Za-z0-9]+$/)
    .min(3)
    .max(10)
    .required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .pattern(/^05\d{8}$/)
    .required(),
  city: Joi.string().required(),
  shippingAddress: Joi.string().required(),
  password: Joi.string().min(8).max(30).required(),
});

const register = async (userData) => {
  const {error, value} = registerSchema.validate(userData);
  if (error) {
    throw error;
  }
  const existUser = await usermodel.find();
  const user = new usermodel(value);
  await user.save();

  
};

// export the access of the function to use like Object.register();
module.exports = { register };
