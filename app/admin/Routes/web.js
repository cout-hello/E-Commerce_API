const express = require("express");
const appRouter = express.Router();

const {adminProductRoutes} = require("./adminRoutes");

appRouter.use(adminProductRoutes);

appRouter.get("/", (req, res) => {
  return res.status(200).render("home_page");
});

module.exports = { appRouter };
