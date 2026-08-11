const express = require("express");
const router = express.Router();
const userspath = "/users"
const auth = require("../middleware/authMiddleware");

router.get("/users/me");
router.patch("/users/me");
router.delete("/users/me");

router.get("/users");
router.get("/users/:id");
router.patch("/users/:id");
router.delete("/users/:id");

module.exports = router;
