const usermodel = require("../Models/user");

const deleteuser = async (userId) => {
  try {
    //console.log("code reatch here");
    console.log(userId);
    const user = await usermodel.findByIdAndDelete(userId);
    //console.log("code reatch here");
    if (!user) {
      throw new Error("user not found");
    }
    //console.log("user deleted");
  } catch (error) {
    
  }
};

module.exports = {deleteuser};
