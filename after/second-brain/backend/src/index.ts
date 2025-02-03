import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { user } from "./types";
import { User, Content } from "./db";
import { userMiddleware } from "./middleware";
import { JWT_Pass, ResponseEnum } from "./config";
const app = express();
app.use(express.json());

//@ts-ignore
app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;
  const parsedUser = user.safeParse({ username, password });
  if (!parsedUser.success) {
    return res.status(ResponseEnum.BadRequest).json({
      msg: "you sent the wrong inputs",
      errors: parsedUser.error.flatten().fieldErrors,
    });
  }
  try {
    const createdUser = await User.create({
      username,
      password,
    });
    var token = jwt.sign({ id: createdUser._id }, JWT_Pass);
    res
      .status(ResponseEnum.Created)
      .json({ msg: "signed up successfully", token });
  } catch (err) {
    res
      .status(ResponseEnum.InternalError)
      //@ts-ignore
      .json({ msg: `an error occured ${err.message}` });
  }
});

//@ts-ignore
app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const parsedUser = user.safeParse({ username, password });
  if (!parsedUser.success) {
    return res.status(ResponseEnum.BadRequest).json({
      msg: "wrong inputs",
      errors: parsedUser.error.flatten().fieldErrors,
    });
  }

  try {
    const existingUser = await User.findOne({ username, password });
    if (!existingUser) {
      return res
        .status(ResponseEnum.Unauthorized)
        .json({ msg: "user does not exist" });
    }
    var token = jwt.sign({ id: existingUser._id }, JWT_Pass);
    res.status(ResponseEnum.Ok).json({ msg: "logged in successfully", token });
  } catch (err) {
    res
      .status(ResponseEnum.BadRequest)
      //@ts-ignore
      .json({ msg: `Some error occured ${err.message}` });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { link, title, type } = req.body;
  try {
    await Content.create({
      link,
      type,
      title,
      //@ts-ignore
      userId: req.userId,
      tags: [],
    });
    res.status(ResponseEnum.Created).json({ msg: "succesfully created" });
  } catch (err) {
    res
      .status(ResponseEnum.InternalError)
      .json({ error: `some error occured ${err}` });
  }
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  try {
    //@ts-ignore
    const userContent = await Content.find({ userId: req.userId }).populate(
      "userId",
      "username"
    );
    if (userContent) {
      res
        .status(ResponseEnum.Ok)
        .json({ content: userContent, msg: "content retrieved successfully" });
    } else {
      res
        .status(ResponseEnum.BadRequest)
        .json({ msg: "content does not exist" });
    }
  } catch (err) {
    res
      .status(ResponseEnum.InternalError)
      .json({ msg: `some error occured ${err}` });
  }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const { contentId } = req.body;
  try {
    //@ts-ignore
    const userId = req.userId;
    const deletedContent = await Content.deleteMany({
      contentId,
      userId,
    });
    if (deletedContent) {
      res.status(ResponseEnum.Ok).json({ msg: "content deleted successfully" });
    } else {
      res
        .status(ResponseEnum.BadRequest)
        .json({ msg: "content does not exist" });
    }
  } catch (err) {
    res
      .status(ResponseEnum.InternalError)
      .json({ error: `some error occured ${err}` });
  }
});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
