const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // log
const bodyparser = require("body-parser");
var cors = require("cors");
// const path = require("path");
const connectDB = require("./database/connection");
const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
connectDB();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("curd application");
});
app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
