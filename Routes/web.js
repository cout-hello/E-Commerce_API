const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

router.use(authRoutes);
router.use(userRoutes);
router.use(productRoutes);

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { router };
