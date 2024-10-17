let arr = [1,2,3,4,5,6];
// function even(x) {
//       return x%2 == 0;
// }
// let newArr = arr.filter(even);
let newArr = arr.filter((x) =>  x%2 == 0);
console.log(newArr);
