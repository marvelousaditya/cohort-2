const fs = require("fs");
//filesystem module

fs.readFile("./a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("helloooo");

let a = 0;
for (let i = 0; i < 10000000000; i++) a++;

console.log("hi there ");

//  while our thread is busy , it doesn't matter what is on the callback queue , it remains busy

// latentflip.com/loupe

// every line is put on the call stack
// when setTimeout is encountered it is sent to WebAPIs , when the timer is completed it is sent to callbackqueue
// the thread after it has executed its current task , the event loop checks if there is something in the callback queue and if there is it executes it
