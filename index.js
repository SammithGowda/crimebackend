require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());
const Notice_bord = require("./Controller/Noticebord_cont");
const { register, login } = require("./Controller/User_cont");

app.post("/register", register);
app.post("/login", login);
app.use("/notice_bord_page", Notice_bord);

const port = process.env.PORT || 4002;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`listing port ${port}`);
  });
};

start();
