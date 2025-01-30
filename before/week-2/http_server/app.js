const express = require("express");

function calcSum(n) {
      let ans = 0;
      for (let i = 1;i <= n;i++) {
            ans += i;
      }
      return ans;
}

function sum(a,b) {
      a = parseInt(a);
      b = parseInt(b);
      return a+b;
};

const app = express();

const PORT = 3000;

app.get("/",(req,res) => {
      const n = req.query.n;
      const ans = calcSum(n);
      res.send(ans.toString());
});


app.get("/sumOfTwo",(req,res) => {
      const x = req.query.x;
      const y = req.query.y;
      const ans = sum(x,y);
      res.send(ans.toString());
})

app.listen(PORT,() => {
      console.log(`listening on ${PORT}`);
});

// res.status(value) -> sends status to server