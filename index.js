const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const sendMail = require("./mail.js");
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname) + "/index.html");
});

//  Check server status
app.get("/status", (req, res) => {
  res.sendStatus(200);
});

//  Get data from client submit form
app.post("/submit", (req, res) => {
  sendMail(req.body);
  res.json("You message has been sent successfully!");
});

//  Init server
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
