// type Input = number | string;
// function firstEle(arr: Input[]) {
//   return arr[0];
// }

// console.log(firstEle([1, 2, 3]));
// console.log(firstEle(["a", "b"]));

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
