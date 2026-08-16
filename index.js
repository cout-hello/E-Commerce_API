const express = require("express");
const app = express();

require("dotenv").config();
const { router: apiRouter } = require("./app/api/Routes/web");
const { appRouter } = require("./app/admin/Routes/web");
const connectDB = require("./app/api/config/database");
const PORT = process.env.PORT;

//hey Expresss, when i use res.render() use EJS to convert template to html
app.set("view engine", "ejs");
// hey Express, all EJS files its inside the /views folder
app.set("views", "./app/admin/views");

const path = require("path");
app.use(express.static(path.join(__dirname, "Public")));

app.use(express.json());
app.use("/", appRouter);
app.use("/", apiRouter);

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
