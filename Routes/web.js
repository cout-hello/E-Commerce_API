const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "root path",
  });
});

module.exports = { router, app, express };
