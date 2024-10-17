let arr = [1, 2, 3, 4];

arr.push(5); // adds an element at end of array

console.log(arr);

let top = arr.pop(); // removes an element from end and returns it

console.log(arr);

let first = arr.shift(); // removes the first element from an array and returns it

console.log(first);
console.log(arr);

arr.unshift(0, 1); // adds one or more element at the start of array

console.log(arr);

let arr2 = [5, 6, 7, 8, 9, 10];
let newArr = arr.concat(arr2); // merges two array and creates a new one

console.log(newArr);

arr.forEach(function (item, index) {
  arr[index] += 1;
}); // applies a function for each of array elements

console.log(arr);

function print(item) {
  console.log(item);
}

arr.forEach(print);
