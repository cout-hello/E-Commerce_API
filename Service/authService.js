// userData its (req.body)
const Jio = require("joi");

const registerSchrema = joi.object({
  name: Jio.string()
    .min(3)
    .max(10)
    .pattern(/^[A-Za-z]+$/)
    .required(),
  username: Jio.string().min(3).max(10).required(),
  email: Jio.string().email().required(),
  phoneNumber: Jio.string().required(),
  city: Jio.string()
    .pattern(/^05\d{8}$/)
    .required(),
  shippingAddress: Jio.string().required(),
  password: Jio.string().min(8).max(30).required(),
});

const register = async (userData) => {
    const{error, value} = registerSchrema.validate(userData);

    if(error){
        throw error;
    }
};

module.exports = register;
