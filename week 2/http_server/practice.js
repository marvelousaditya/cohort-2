const express = require("express");
const app = express();
const port = 3000;

let beforeRequest;
function timeAt(req,res,next) {
      const dateObj = new Date();
      beforeRequest = dateObj.getTime();
      next();
}

function sumFun(n) {
      let s = 0;
      for (let i = 1;i <= n;i++)
            s += i;
      return s;
}

app.use(timeAt);

app.get("/",(req,res) => {
      const n = req.query.n;
      const sum = sumFun(n);
      console.log(sum);

      const dateObj = new Date();
      const afterRequest = dateObj.getTime();
      const ans = afterRequest - beforeRequest;

      res.send(ans.toString());
})

app.listen(port, () => {
      console.log(`listening on ${port}`);
});