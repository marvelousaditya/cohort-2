function greet() {
  console.log("hello!");
}

function greetAlien() {
  console.log("hello alien");
}

setTimeout(greet, 3 * 1000);

greetAlien();

setInterval(greetAlien, 1 * 1000);
