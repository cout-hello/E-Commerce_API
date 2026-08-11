const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");

router.use(authRoutes);

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { router };
