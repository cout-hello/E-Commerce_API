const express = require("express");
const router = express.router();
const auth = require("../middleware/authMiddleware");

router.get("/orders");
router.get("/orders/:id");

router.post("/orders");

router.patch("/orders/:id/status");

module.exports = router;