const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/product");
router.get("/product/:id");

router.post("/product");

router.patch("/product/:id");

router.delete("product/:id");

module.exports = router;