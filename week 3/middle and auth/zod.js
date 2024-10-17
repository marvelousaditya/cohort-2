const express = require("express");
const zod = require("zod");
const port = 3000;
const app = express();

const schema = zod.array(zod.number()); // it tells that input will be array of number

/**
 * {
 *    email: string => email
 *    password: at least 8 characters
 *    country: "IN" or "US"
 * }
 */

const schema1 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
});
app.use(express.json());

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  // const length = kidneys.length;
  if (!response.success)
    res.status(411).json({
      msg: "invalid input",
    });
  else res.send({ response });
});

app.use(function (err, req, res, next) {
  res.json({ msg: "you did something wrong" });
}); // this is global catches , it is called whenever an exception occurs in a request

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
