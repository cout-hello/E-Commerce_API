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
  const existUser = await usermodel.find();
  console.log(existUser);

  const user = new usermodel(userData);

  await user.save();

  if (error) {
    throw error;
  }
};

// export the access of the function to use like Object.register();
module.exports = { register };
