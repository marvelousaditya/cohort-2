const express = require("express");

const app = express();
const port = 3000;

app.get("/health_checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.user;
  const pass = req.headers.pass;

  if (username != "aditya" || pass != "12345") {
    res.status(403).json({
      msg: "wrong username or password",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "wrong kidney ID",
    });
    return;
  }

  // do some logic

  res.json({
    msg: "everything is alright",
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
