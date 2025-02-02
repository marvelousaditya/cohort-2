type Input = string | number;
function wow(x: Input[]) {
  console.log(x);
}
wow([1, 2, "3"]);

// the problem with the above code is that it works when x is mixed of string and number

function wowPartialFixed(x: string[] | number[]) {
  console.log(x);
  // console.log(x[0].toLowerCase());
  // the above problem is fixed but a new problem arises , even when x is string it can't peroform string operations
  // as ts can't infer it properly
}

// we can solve the problem using generics
function identity<T>(x: T[]): T {
  return x[0];
}

let output1 = identity<string>(["myString", "hi"]);
// let output2 = identity<number>(100);
console.log(output1.toUpperCase());
