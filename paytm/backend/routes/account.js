const express = require("express");
const authMiddleware = require("../middleware");
const mongoose = require("mongoose");
const router = express.Router();
const { Account, User } = require("../db");
const { transferAuth } = require("../types");

router.get("/balance", authMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    const account = await Account.findOne({ userId });
    res.status(200).json({ balance: account.balance });
  } catch (err) {
    res.status(500).json({ error: "internal server errors" });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  try {
    const account = await Account.findOne({ userId: req.userId }).session(
      session,
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } },
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } },
    ).session(session);

    await session.commitTransaction();
    res.json({ message: "Transfer successful" });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ error: "Internal server error" });
  } finally {
    session.endSession();
  }
});

module.exports = router;
