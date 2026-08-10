const express = require("express");
const router = express.Router();
const app = express();

router.get("/", () => {
  console.log("root path");
});

module.exports = { router, app, express };
