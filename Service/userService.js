const usermodel = require("../Models/user");
const userData = require("../con");

const deleteuser = async (userId) => {
  try {
    const user = usermodel.findByIdAndDelete(userId);
if(!user){
    throw new Error("user not found");
}
return console.log("user deleted");

  } catch (error) {

  }
};

module.exports = {deleteuser};