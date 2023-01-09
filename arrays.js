let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 34];

//es5
// arr.push(10);

//es6
// arr = [...arr, 10];
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr = [0, ...arr];

// arr = [0, ...arr, 10];

// let arr3 = [0, ...arr, 1, ...arr2, 10];
// console.log("🚀 ~ file: arrays.js:15 ~ arr3", arr3);

let arr4 = ["kenny", 8];

let [name, age] = arr4;
/*
    let name = arr4[0]
    let age = arr4[1]
*/
console.log("name", name);
