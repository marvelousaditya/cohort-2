//without arrow function
function sum1(a,b) {
	return a+b;
}

console.log(sum1(2,3));

//with arrow function
const sum = (a,b) => { return a+b };
let ans = sum(5,2);
console.log(ans);
