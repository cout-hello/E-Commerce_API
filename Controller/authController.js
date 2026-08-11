const authService = require("../Service/authService");

const authregister = async (req, res, next) => {
  try {
    await authService.register(req.body);
    console.log("routes work");

    return res.status(200).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

module.exports = authregister;
