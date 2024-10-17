const express = require("express");
const jwt = require("jsonwebtoken");
const { array } = require("zod");
const jwtPassword = "123456";

const app = express();

const userData = [
      {
            username: "aduthekaddu",
            password: "123",
            name: "aditya singh"
      },
      {
            username: "marvellousaditya",
            password: "1545134",
            name: "aditya singh"
      },
      {
            username: "marvelousaditya",
            password: "143415",
            name: "aditya singh"
      }
];

app.use(express.json());

function userExists(username, password) {
      // for (let i = 0;i < userData.length;i++) {
      //       if (userData[i].username == username && userData[i].password == password)
      //             return true;
      // }
      const flag = userData.find((user) => {
            user.username == username && user.password == password;
      })
      return false;
};

app.post("/signin",(req,res) => {
      const username = req.body.username;
      const password = req.body.password;

      if(!userExists(username,password)) {
            return res.status(403).json({
                  "msg" : "user does not exist",
            })
      }

      var token = jwt.sign({username: username},jwtPassword);
      return res.json({
            token,
      });
});

app.get("/users", (req,res) => {
      const token = req.headers.authorization;
      try {
            const decoded = jwt.verify(token,jwtPassword)
            const username = decoded.username;
            // return a list of users than this username
            res.json({
                  users: userData
            })
      } catch(err) {
            return res.status(403).json({
                  msg : "invalid token",
            });
      }
});

app.listen(3000, () => {
      console.log("listening on port 3000");
});

