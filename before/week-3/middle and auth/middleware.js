const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
  const username = req.headers.user;
  const pass = req.headers.pass;

  if (username === "aditya" && pass === "12345") next();
  else
    res.status(403).json({
      msg: "wrong username or password",
    });
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId == "1" || kidneyId == "2") next();
  else
    res.status(411).json({
      msg: "wrong kidney id",
    });
}

app.get("/health_checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("you are healthy");
});

app.get("heart_checkup", userMiddleware, (req, res) => {
  res.send("your heart is ok");
});

app.listen(port, () => {
  console.log(`listenign on ${port}`);
});
