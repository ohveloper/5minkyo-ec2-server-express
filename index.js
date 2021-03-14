const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello world node server !");
});

app.listen(80, () => {
  console.log("server on 80");
});
