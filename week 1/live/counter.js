let i = 30;
function count() {
  if (i >= 0) console.log(i--);
  else clearInterval;
}

setInterval(count, 1000);

// function called() {
//   console.log("called");
//   clearInterval(intervalId);
// }

// setTimeout(called, 123 * 1000);

// i = 1;
// function time() {
//   console.log(i++);
// }

// const intervalId = setInterval(time, 1000);
