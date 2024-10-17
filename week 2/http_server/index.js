// const express = require("express");

// const port = 3000;

// const app = express();

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

// app.listen(port, function () {
//   console.log(`Example app listening at ${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let todo = [
  {
    task: "study",
    status: "done",
  },
  {
    task: "play games",
    status: "not done",
  },
  {
    task: "play guitar",
    status: "not done",
  },
];
//middlewares
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let responseText = "";
  for (let i = 0; i < todo.length; i++) {
    responseText +=
      "task is " + todo[i]["task"] + " and it is " + todo[i]["status"] + "<br>";
  }
  res.send(responseText);
});

app.post("/ex", (req, res) => {
  console.log(req.body);
  console.log(req.headers["authorization"]);
  res.send("<b> hi man </b>");
});

app.listen(port, () => console.log(`listening on ${port}`));
