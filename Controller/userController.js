const userservice = require("../Service/userService");

const deleteuser = async (req, res, next) => {
  try {
    const user = await userservice.deleteuser("6a7c1566b3775b26bde6e6ca");
    //console.log("code reatch here after deleteuser fun ");
    // if user not found throw Error
    
    if (!user) {
      throw new Error("user not found");
    }
    console.log("code reatch here bafore return deleteuser fun ");
    return res.status(200).json({ message: "user deleted" });
    console.log("code reatch here after return deleteuser fun ");
  } catch (error) {}
};

module.exports = { deleteuser };
