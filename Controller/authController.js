const authService = require("../Service/authService");

const authRegister = async (req, res, next) => {
  try {
    await authService.register(req.body);
    console.log("routes work");

    return res.status(200).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

module.exports = authRegister;
