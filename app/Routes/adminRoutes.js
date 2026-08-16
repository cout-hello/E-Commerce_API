const express = require("express");
const router = express.Router();
const {
  getAdminProductsController,
  addAdminProductController,
  deleteAdminallProductController,
  getAdminProductByIdController,
} = require("../Controller/adminProductController");

router.get("/admin/products", getAdminProductsController);
router.get("/admin/product_details/:id", getAdminProductByIdController);

module.exports = router;
