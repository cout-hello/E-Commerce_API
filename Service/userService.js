const usermodel = require("../Models/user");
const userData = require("../Controller/userController");

const deleteuser = async (userId) => {
  try {
    const user = await usermodel.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("user not found");
    }
    return console.log("user deleted");
  } catch (error) {
    return error;
  }
};

module.exports = { deleteuser };
