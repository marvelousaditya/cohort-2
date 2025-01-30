// creating our own asynchronous without promise

const fs = require("fs");
//filesystem module

function readFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

readFile(onDone);

// with promise

function readFile1() {
  console.log("inside function");
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve");
      resolve(data);
    });
  });
}

var a = readFile1();
console.log(a);

a.then(onDone);

// the promise comes synchronosouly but the data asynchronously
// the then function decides where to send the data

// promise has three states -> pending , resolved , rejected

function fn() {
  return "it gets immediately resolved";
}

let p = Promise.resolve(fn());

p.then(function (data) {
  console.log(data);
});

console.log("1");
function myExample() {
  console.log("3");
  return new Promise(function (resolve) {
    console.log("inside promise 4");
    setTimeout(function () {
      console.log("inside settimout 5");
      resolve("executed");
    }, 5000);
  });
}
console.log("2");
myExample().then(function (value) {
  console.log("promised 6");
  console.log(value);
});
