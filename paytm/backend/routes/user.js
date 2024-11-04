const express = require("express");
const router = express.Router();
const { User, Account } = require("../db");
const { signupAuth, signinAuth, updateUserData } = require("../types");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const authMiddleware = require("../middleware");

router.put("/", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const authResult = updateUserData.safeParse(req.body);
  if (!authResult.success) {
    res.status(411).json({ msg: authResult.error.errors });
  }
  try {
    const updateResult = await User.updateOne({ _id: userId }, req.body);
    if (updateResult === 0) {
      return res.status(400).json({ msg: "no changes made" });
    }
    console.log(req.body);
    res.status(200).json({ msg: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } },
      ],
    });
    if (users.length === 0) {
      return res.status(404).json({ msg: `no user with ${filter}` });
    }
    res.status(200).json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  const userData = req.body;
  const result = signupAuth.safeParse(userData);
  if (!result.success) {
    return res.status(400).json({ msg: result.error.errors });
  }
  const userExists = await User.findOne({ username: userData.username });
  if (userExists) {
    return res.status(400).json({ msg: "user already exists" });
  }

  try {
    const user = await User.create({
      username: userData.username,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    const userId = user._id;
    await Account.create({ userId, balance: 1 + Math.random() * 10000 });
    console.log("below account");
    var token = jwt.sign({ userId }, JWT_SECRET);
    console.log("token generated");
    res.status(200).json({ msg: "user created successfully", token: token });
  } catch (err) {
    res.status(500).json({ error: "internal server errors" });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const result = signinAuth.safeParse({ username, password });
  if (!result.success) {
    return res.status(400).json({
      msg: result.error.errors,
    });
  }
  const userExists = await User.findOne({ username, password });
  if (!userExists) {
    return res.status(400).json({ error: "wrong username or password" });
  }
  const userId = userExists._id;
  var token = jwt.sign({ userId }, JWT_SECRET);
  res.status(200).json({ msg: "user loged in successfully", token: token });
});

module.exports = router;
