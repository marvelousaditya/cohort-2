const express = require("express");

var users = [{name: "kaddu",
      kidneys : [{healthy : false},
            {healthy: true}]
      },
];

function display() {
      let str = "";
      for (let i = 0;i < users.length;i++) {
            str += `name is ${users[i]["name"]} and left kidney is ${users[i]["kidneys"][0]["healthy"]} and right kidney is ${users[i]["kidneys"][1]["healthy"]} <br>`;
      }
      return str;
}
const app = express();
const port = 3000;

app.get("/count",(req,res) => {
      let n = 0;
      for (let i = 0;i < users.length;i++) {
            if (users[i]["kidneys"][0] && users[i]["kidneys"][1])
                  n++;
      }
      let str =  `no of users are ${users.length} and healthy are ${n}`;
      res.send(str);
      
})

app.post("/add",(req,res) => {
      // const nam = req.query.name;
      // const left = req.query.l;
      // const right = req.query.r;
      // console.log(req.headers);
      const nam = req.headers["name"];
      const left = Boolean(parseInt(req.headers["left"]));
      const right = Boolean(parseInt(req.headers["right"]));
      users.push({name: nam,kidneys:[{healthy: left},{healthy : right}]});
      res.send(users.toString());
})

app.put("/update",(req,res) => {
      const nam = req.headers["name"];
      const which = parseInt(req.headers["which"]);
      const value = Boolean(parseInt(req.headers["value"]));
      // which = parseInt(which);
      for (let i = 0;i < users.length;i++) {
            if (users[i]["name"] == nam) {
                  if (value)
                        users[i]["kidneys"][which] = true;
                  else 
                        users[i]["kidneys"][which] = false;
            }
      }
      res.send("success");
})

app.delete("/delete",(req,res) => {
      const nam = req.headers["name"];
      const which = parseInt(req.headers["which"]);
      for (let i = 0;i < users.length;i++) {
            if (users[i]["name"] == nam) {
                  users[i]["kidneys"][which] = false;
            }
      }
      res.send("success");
})

app.get("/display",(req,res) => {
      const obj = display();
      res.send(obj);
})
app.listen(port,() => {
      console.log(`listening on ${port}`);
});