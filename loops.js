let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let n0 = 1
//es5
let l = arr.length;
for (let i = 0; i < l; i++) {
  console.log(arr[i]);
}

//es6+
for (let item of arr) {
  //let item = n0
  console.log(item);
}
console.log("🚀 ~ file: loops.js:14 ~ arr", arr);

arr = arr.map((item) => item + 1);
console.log("🚀 ~ file: loops.js:17 ~ arr", arr);

let objarr = [
  { name: "kenny", age: 8 },
  { name: "john", age: 40 },
  { name: "james", age: 40 },
];

objarr = objarr.map((user) => ({ ...user, age: user.age + 1 }));
console.log("🚀 ~ file: loops.js:26 ~ objarr", objarr);

// for (let i = 0; i < objarr.length; i++) {
//   objarr[i].age++;
// }

let objArr40 = objarr.filter((user) => user.age >= 40);
console.log("🚀 ~ file: loops.js:33 ~ objArr40", objArr40);
