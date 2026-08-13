const express = require("express");
const app = express();

require("dotenv").config();
const { router } = require("./Routes/web");
const connectDB = require("./config/database");
const PORT = process.env.PORT;

//hey Expresss, when i use res.render() use EJS to convert template to html
app.set("view engine", "ejs");
// hey Express, all EJS files its inside the /views folder 
app.set("views", "./views");

app.use(express.json());
app.use("/", router);
app.get("/products", (req, res) => {
  res.render("products_list");
});

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
