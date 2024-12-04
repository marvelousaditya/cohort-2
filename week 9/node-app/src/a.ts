// let x: number = 1;
// // x = "aditya";         gives type error
// console.log(x);

// function hmm(firstName: string) {
//   console.log("Hello " + firstName);
// }

// hmm("adi");

// function sum(a: number, b: number): number {
//   return a + b;
// }

// let res = sum(5, 7); // we can explictely define the type here but ts knows it is a number through type interference
// // so we don't need to explicetly specify it
// console.log(res);

// function isLegal(age: number): boolean {
//   return age >= 18;
// }

// let adult = isLegal(15);

// function runFunction(fn: (a: number, b: number) => number) {
//   setTimeout(() => {
//     let x = fn(5, 6);
//     console.log(x);
//   }, 1000);
// }

// runFunction(sum);

// function anFunction(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// anFunction(() => {
//   console.log("hi there");
// });

// const greet = (name: string) => {
//   console.log(`Hello, ${name}`);
// };

// greet("kaddu");

// function runAfter1S(fn: () => void) {
//   setTimeout(() => {
//     let x = fn();
//   }, 1000);
// }

// runAfter1S(() => {
//   console.log("hi");
//   return 5;
// });

//

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }

// function isLegal(user: User) {
//   return user.age >= 18;
// }

// function greet2(user: User) {
//   console.log("hi " + user.firstName);
// }

// const user = {
//   firstName: "aditya",
//   lastName: "singh",
//   age: 21,
// };
// const haha = isLegal(user);

// console.log(haha);
// greet2(user);

//
