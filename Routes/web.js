const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

router.use(authRoutes);
router.use(userRoutes);

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { router };
