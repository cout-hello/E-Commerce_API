const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

router.get("/users");
router.get("/users/:id");
router.patch("/users/:id");
router.delete("/users/:id");

router.get("/users/me");
router.patch("/users/me");
router.delete("/users/me");

module.exports = router;