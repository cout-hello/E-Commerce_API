const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/products");
router.get("/products/:id");

router.post("/products");

router.patch("/products/:id");

router.delete("/products/:id");

module.exports = router;