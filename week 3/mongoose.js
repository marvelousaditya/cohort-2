const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const jwtPassword = "12345";

mongoose.connect (
      "mongodb+srv://aduthekaddu:tripleThr3at@cluster0.pbemi.mongodb.net/newUser"
);
      
const user = mongoose.model("User", {
      username: String,
      password: String,
      name: String
});

app.use(express.json());

async function userExists(username, password){
      // check in db
      const flag = await user.findOne({username: username})
}

app.post("/signin", async function(req,res) {
      const username = req.body.username;
      const password = req.body.password;

      if (!userExists(username,password)) 
            return res.status(403).json({
                  msg: "user does not exist"
            });
      
      var token = jwt.sign({user: username},jwtPassword);
      
      res.json({token});
})

app.get("/users",(req,res) => {
      const token = req.headers.authorization;
      try {
            const decoded = jwt.verify(token,jwtPassword);
            const username = decoded.username;
             // send user list back
      } catch(err) {
            res.json({
                  msg: "invalide token"
            });
      }
});

app.listen(3000,() => {
      "listening on port 3000"
});