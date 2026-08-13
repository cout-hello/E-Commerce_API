const usermodel = require("../Models/user");

const deleteuser = async (userId) => {
  try {
    //console.log("code reatch here");
    console.log(userId);
    const user = await usermodel.findByIdAndDelete(userId);
    if (!user) {
      console.log("the user value from return findByIdAndDelete :" + user);
      return res.status(404).json({ message: "user not found", erroe: error });
    }
    //console.log("user deleted");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error in service", erroe: error });
  }
};

module.exports = { deleteuser };
