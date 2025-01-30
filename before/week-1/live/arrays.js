let a = [11, 25, 156, 12, 18, 19, 20, 21, 22, 23];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) console.log(a[i]);
}

let max = Number.MIN_VALUE;
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];
}
console.log("max value is : " + max);

let s = 0;
let e = a.length;
while (s <= e) {
  let temp = a[s];
  a[s] = a[e];
  a[e] = temp;
  s++;
  e--;
}

console.log("reversed array is : ");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
