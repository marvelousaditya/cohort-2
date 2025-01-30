const { application } = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aduthekaddu:tripleThr3at@cluster0.pbemi.mongodb.net/userAppNew");

const User = mongoose.model("user",{
      username: String,
      password: String,
      dob: Number
});

const user = new User({
      username: "aduthekaddu",
      password: "12452",
      dob : 582003
});

user.save();
