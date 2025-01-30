// without promise

function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("hello");
}, 3000);

// when there are callback within a callback function which it leads to callback hell

// with promise

function myOwnSetTimeout1(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeout1(2000).then(function () {
  console.log("hello from promise");
});


