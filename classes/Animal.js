class Animal {
  static isAnimal(animal) {
    return animal instanceof Animal;
  }
  name;
  age;
  color;
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  get nameAndColor() {
    return this.name + " " + this.color;
  }
}

class Dog extends Animal {
  ownerThatLike;
  constructor(ownerThatLike) {
    super("Rex", 1, "#000");
    this.ownerThatLike = ownerThatLike;
  }
}

class Dolphin extends Animal {
  group;
  constructor(name, age, color, group) {
    super(name, age, color);
    this.group = group;
  }
  get nameAndColor() {
    return 2;
  }
}

let dog = new Dog("Kenny");
console.log("🚀 ~ file: Animal.js:27 ~ dog", dog);

let dolphin = new Dolphin("flipper", 10, "#00f", "Bardugo family");

console.log(dolphin instanceof Animal);
console.log(dolphin.constructor.name);
console.log("nameAndColor", dolphin.nameAndColor);
const printAnimal = (animal) => {
  if (!animal) {
    return;
  }
  if (!(animal instanceof Animal)) {
    return;
  }
  console.log("animal: ", animal.name, animal.age, animal.color);
};

printAnimal(dog);
printAnimal(dolphin);
printAnimal();
printAnimal({});

console.log("is animal", Animal.isAnimal(dog));

/*
    let d = {
        name;
        age;
        color;
        group;
        nameAndColor(from animal)...
    }
    d.nameAndColor = nameAndColor(from Dolphin)
*/
