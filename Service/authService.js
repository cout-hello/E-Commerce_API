// userData its (req.body)
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
  console.log("USER DATA:", userData);
  console.log("SCHEMA:", registerSchema);

  const result = registerSchema.validate(userData);

  console.log("RESULT:", result);
  console.log("ERROR:", result.error);
  console.log("VALUE:", result.value);

  if (error) {
    throw error;
  }
};

module.exports = { register };
