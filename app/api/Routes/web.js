const express = require("express");
const apiRouter = express.Router();

const authRoutes = require("./authRoutes");
const {userRoutes} = require("./userRoutes");
const productRoutes = require("./productRoutes");

apiRouter.use(authRoutes);
apiRouter.use(userRoutes);
apiRouter.use(productRoutes);

apiRouter.get("/api", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { apiRouter };
