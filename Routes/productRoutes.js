const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getProductsController,
  addProductController,
  deleteallProductController,
} = require("../Controller/productController");

router.get("/products", getProductsController);
router.post("/products", addProductController);
router.delete("/products", deleteallProductController);
/**
router.get("/products/:id");



router.patch("/products/:id");

router.delete("/products/:id");
*/

module.exports = router;
