const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL);
console.log("db connected");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, minLength: 6, maxLength: 12 },
  password: { type: String, required: true, minLength: 8, maxLength: 12 },
  firstName: { type: String, required: true, maxLength: 12 },
  lastName: { type: String, required: true, maxLength: 12 },
});

const accountSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
