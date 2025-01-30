let x = 5;
let y = 6;
function sum(a, b, fnToCall) {
  let ans = a + b;
  fnToCall(a, b, ans);
}

function pretty(a, b, sum) {
  console.log("sum of " + a + " and " + b + " is " + sum);
}

function prettyPassive(a, b, sum) {
  console.log("sum's of " + a + " " + b + " " + sum);
}

sum(3, 4, pretty);
// callbacks

// callback example 2

function calc(a, b, fnToCall) {
  return fnToCall(a, b);
}

function sumation(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log(calc(4, 2, sub));

function sumOfSomething(a, b, fn) {
  console.log(fn);
  return fn(a) + fn(b);
}

let result = sumOfSomething(3, 4, function (n) {
  return n * n * n;
}); // the function passed here does not have a name and is known as anonymous function , since it does not need to be called late we do not need to give it a name

console.log(result);
