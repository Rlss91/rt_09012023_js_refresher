let obj = {
  name: "kenny",
  age: 8,
};

let { name } = obj;
//let name = obj.name

let obj2 = obj;

obj2.age = 10;

let obj3 = { ...obj };

obj3.age = 20;

console.log(obj, obj2, obj3);

obj3.address = {
  city: "south park",
  st: "south park",
  house: 10,
};

let obj4 = { ...obj3 };

obj4.address = { ...obj3.address };

obj4.address.house = 15;

console.log(obj3, obj4);

let array = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Samuel",
    age: 21,
  },
  {
    id: 3,
    name: "marvin",
    age: 26,
  },
  {
    id: 4,
    name: "james",
    age: 28,
  },
];

let array2 = JSON.parse(JSON.stringify(array)); //deep copy

let salt = 100;
let sugar = 100;
let supplies = {
  salt,
  sugar,
};
// let supplies = {
//   salt: salt,
//   sugar: sugar,
// };
