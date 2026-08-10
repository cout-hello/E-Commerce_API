const express = require("express");
const router = express.router();
const auth = require("../middleware/authMiddleware");

router.post("/auth/register");
router.post("/auth/login");

module.exports = router;
