const express = require("express");
const app = express();

require("dotenv").config();
const { router:apiRouter } = require("./Routes/web");
const { appRouter } = require("./app/Routes/web");
const connectDB = require("./config/database");
const PORT = process.env.PORT;

//hey Expresss, when i use res.render() use EJS to convert template to html
app.set("view engine", "ejs");
// hey Express, all EJS files its inside the /views folder 
app.set("views", "./app/views");

const path = require("path");
app.use(express.static(path.join(__dirname, "app/Public")));

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
