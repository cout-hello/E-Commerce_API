// userData its (req.body)
const Jio = require("joi");

const registerSchema = Jio.object({
  name: Jio.string()
    .min(3)
    .max(10)
    .pattern(/^[A-Za-z]+$/)
    .required(),
  username: Jio.string()
    .pattern(/^[A-Za-z0-9]+$/)
    .min(3)
    .max(10)
    .required(),
  email: Jio.string().email().required(),
  phoneNumber: Jio.string()
    .pattern(/^05\d{8}$/)
    .required(),
  city: Jio.string().required(),
  shippingAddress: Jio.string().required(),
  password: Jio.string().min(8).max(30).required(),
});

const register = async (userData) => {
  console.log("RESULT:", registerSchema.validate(userData));

  const { error, value } = registerSchema.validate(userData);
  if (error) {
    throw error;
  }
};

module.exports = { register };
