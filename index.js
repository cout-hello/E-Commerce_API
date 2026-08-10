require("dotenv").config();
const { exit } = require("node:process");
const { router, app, express } = require("./Routes/web");
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
    process.exit("1");
  }

  startserver();
};
