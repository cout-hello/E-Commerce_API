const userservice = require("../Service/userService");

const deleteuser = async (req, res, next) => {
  try {
    const user = userservice.deleteuser("6a7ad9ff384bd8040e19c1e4");
    // if user not found throw Error
    if (!user) {
      throw new Error("user not found");
    }
    return res.status(200).json({ message: "user deleted" });
  } catch (error) {}
};

//send without {}, bc its not used like a function
module.exports = deleteuser;