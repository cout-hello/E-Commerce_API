const express = require("express");
const router = express.Router();
const {deleteuser} = require("../Controller/userController");
const auth = require("../middleware/authMiddleware");


router.delete("/users/me", deleteuser);
/** router.get("/users/me");
router.patch("/users/me");


router.get("/users");
router.get("/users/:id");
router.patch("/users/:id");
router.delete("/users/:id");*/


module.exports = router;
