type StringOrNumber = string | number;
function hehe(x: StringOrNumber): StringOrNumber {
  console.log(x);
  return x;
}

hehe("hi");

hehe(5);
