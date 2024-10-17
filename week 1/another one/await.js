function print() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 5000);
  });
}

async function run() {
  //   print().then(function (value) {
  //     console.log(value);
  //   });
  let p = await print(); // the control does not go to next line and instead is waits here unless it is executed completely

  console.log(p);
  console.log("hi there 2");
}

run();
console.log("after run");
