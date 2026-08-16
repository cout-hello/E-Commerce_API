const {
  deleteUserByIdService,
  displayUsersService,
} = require("../Service/userService");

const deleteuser = async (req, res, next) => {
  try {
    const user = await userservice.deleteuser("6a7c194daace84def66a9c1e");
    //console.log("code reatch here after deleteuser fun ");
    // if user not found throw Error
    if (!user) {
      console.log(user);
      return res.status(404).json({ message: "user not found", erroe: error });
    }
    console.log("code reatch here bafore return deleteuser fun ");
    return res.status(200).json({ message: "user deleted" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Server error in service in controller", erroe: error });
  }
};

const displayUsers = async (req, res, next) => {
  try {
    return res.status(404).json({
      message: "there is no code yet displayUsers fun in controller",
      erroe: error,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Server error in service in controller", erroe: error });
  }
};

module.exports = { deleteuser };
