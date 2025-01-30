const express = require("express");
const zod = require("zod");
const port = 3000;
const app = express();

/**
 * {
 *    email: string => email
 *    password: at least 8 characters
 *    country: "IN" or "US"
 * }
 */

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
});
app.use(express.json());

app.post("/", (req, res) => {
  // const email = req.body.email;
  // const pass = req.body.pass;
  // const country = req.body.country;

  // const obj = {
  //       email: email,
  //       password: pass,
  //       country: country
  // }
  const response = schema.safeParse(req.body);
  // const length = kidneys.length;
  if (!response.success)
    res.status(411).json({
      msg: "invalid input",
    });
  else res.send({ response });
});

app.use(function (err, req, res, next) {
  res.json({ msg: "you did something wrong" });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//coercion means to push someone to do something
/**
 * function middleware() {
 *    return (req,res,next) => {};
 * }
 *
 * app.use(middleware());
 *
 * here if middleware does not have (req,res,next) but it returns a function which does it so we use app.use(middleware())
 *
 * app.use(..) accepts middleware function
 *
 * so since express.json is not a function but express.json() returns function we use it like that
 *
 */
