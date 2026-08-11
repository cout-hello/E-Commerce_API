const express = require("express");
const app = express();

require("dotenv").config();
const { router } = require("./Routes/web");
const connectDB = require("./config/database");
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", router);

const startserver = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("Server Connected");
    });
  } catch (error) {
    console.log("Failed to start server:", error);
    process.exit(1);
  }
};
startserver();
