let arr = [2,3,4,5];
let newArr = arr.map((x) => x*2);
console.log(newArr);

// 
function transform(x) {
	return x*2;
}

let anArr = arr.map(transform);
console.log(anArr);

