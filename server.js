const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const ConnectDB = require("./utils/connectDB");

//CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
//connect to database
ConnectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    

const router = require("./routes");
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
