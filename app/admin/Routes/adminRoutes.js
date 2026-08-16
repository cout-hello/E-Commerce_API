const express = require("express");
const adminProductRoutes = express.Router();
const {
  getAdminProductsController,
  addAdminProductController,
  deleteAdminallProductController,
  getAdminProductByIdController,
} = require("../Controller/adminProductController");

adminProductRoutes.get("/admin/products", getAdminProductsController);
adminProductRoutes.get(
  "/admin/product_details/:id",
  getAdminProductByIdController,
);

module.exports = { adminProductRoutes };
