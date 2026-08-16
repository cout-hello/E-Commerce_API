const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminProductRoutes = require("../../admin/Routes/adminRoutes");

router.use(authRoutes);
router.use(userRoutes);
router.use(productRoutes);
router.use(adminProductRoutes);


router.get("/", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { router };
