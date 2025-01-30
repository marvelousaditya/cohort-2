class Animal {
  constructor(species, speaks, legCount) {
    this.species = species;
    this.speaks = speaks;
    this.legCount = legCount;
  }

  static print() {
    console.log("static methods are not related to the objects but to the class");
  }
  speak() {
    console.log(this.speaks);
  }
}

let dog = new Animal("dog", "barks", "4"); // creating an obejct
let cat = new Animal("cat", "meow", "4");

dog.speak();

Animal.print();
