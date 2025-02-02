function sum(x: string,y: number):string {
  return x + y;
}

let res : string = sum("1",2);
console.log(res);

function oneSec(x:() => void) : void {
  setTimeout(x,1000);
}

oneSec(() => {
  console.log("hi");
})
