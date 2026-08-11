const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const authregister = require("../Controller/authController");

router.post("/auth/register", authregister);
router.post("/auth/login");

module.exports = router;
