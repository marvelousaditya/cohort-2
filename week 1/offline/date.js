let currentDate = new Date();
// date is a class , so we create its object to use it

console.log(currentDate); // is an object , but prints the current date

console.log(currentDate.getMonth() + 1); // gives the current month, its zero index so we add 1

console.log(currentDate.getDate()); // gives the current month

console.log(currentDate.getYear()); // gives the current year - 1900

console.log(currentDate.getFullYear()); // gives the current year

console.log(currentDate.getHours()); // gives the current hour

console.log(currentDate.getMinutes()); // gives the current minute

console.log(currentDate.getSeconds()); // gives the current second

// Setting components of the date
currentDate.setFullYear(2022); // changes current year to specified year
console.log("After setFullYear:", currentDate);

currentDate.setMonth(5); // Setting current month to June (zero-indexed)
console.log("After setMonth:", currentDate);

const current = new Date();
console.log("Time in milliseconds since 1970:", current.getTime()); // calculates time from 1970 till now in seconds


// calculate the time it takes to run a function
function fun() {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a += i;
  }
  return a;
}

const oldTime = new Date();
const x = oldTime.getTime();

fun();

const newTime = new Date();
const y = newTime.getTime();
let calc = y - x;
console.log("time it toook " + calc);
