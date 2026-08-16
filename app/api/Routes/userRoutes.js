const express = require("express");
const userRoutes = express.Router();
const { deleteuser, displayUsers } = require("../Controller/userController");
const auth = require("../middleware/authMiddleware");


userRoutes.delete("/api/users/me", deleteuser);
userRoutes.get("/api/users", auth, displayUsers);
/** router.get("/users/me");
router.patch("/users/me");



router.get("/users/:id");
router.patch("/users/:id");
router.delete("/users/:id");*/


module.exports = { userRoutes };
