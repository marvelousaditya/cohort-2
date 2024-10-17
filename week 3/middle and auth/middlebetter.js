const express = require("express");

const app = express();
const port = 3000;

function authCheck(username, pass) {
  return username != "aditya" || pass != "12345";
}

function inpCheck(kidneyId) {
  return kidneyId == 1 || kidneyId == 2;
}
app.get("/health_checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.user;
  const pass = req.headers.pass;

  if (authCheck(username, pass)) {
    res.status(403).json({
      msg: "wrong username or password",
    });
    return;
  }

  if (inpCheck(kidneyId)) {
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
