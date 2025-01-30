const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.post("/", (req,res) => {
	const kidneys = req.body.kidneys;
	const length = kidneys.length;
	
	res.send("your kidney length is "+length);
});

app.use(function(err,req,res,next) {
	res.json({"msg" : "you did something wrong"});
});	// this is global catches , it is called whenever an exception occurs in a request

app.listen(port,() => {
	console.log(`listening on ${port}`);
});



