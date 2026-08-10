const express = require("express");
const Router = express.Router();
const app = express();

Router.get("/", () => {
  console.log("root path");
});



module.exports = { Router, app, express };
