class Animal {
  name;
  age;
  color;
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
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
}

let dog = new Dog("Kenny");
console.log("🚀 ~ file: Animal.js:27 ~ dog", dog);

let dolphin = new Dolphin("flipper", 10, "#00f", "Bardugo family");
