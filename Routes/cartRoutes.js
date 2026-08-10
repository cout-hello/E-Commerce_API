const express = require("express");
const router = express.router();

const auth = require("../middleware/authMiddleware");

router.get("/cart");

router.post("/cart/items");

router.patch("/cart/items/:productid");

router.delete("/cart/items/:productid");
router.delete("/cart");

module.exports = router;
