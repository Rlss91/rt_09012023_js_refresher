//string to number
let str = "123";
let n = +str;
console.log("🚀 ~ file: casting.js:3 ~ n", n);

str = "abc";
n = +str;
console.log("🚀 ~ file: casting.js:7 ~ n", n);

//number to string
n = 123;
str = n + "";
console.log("🚀 ~ file: casting.js:13 ~ str", str);

//falsy
//false, 0, null, "", undefined
let age = 0;
if (age) {
  console.log("age != 0");
} else {
  console.log("age == 0");
}

//boolean to number
n = +false;
console.log("🚀 ~ file: casting.js:25 ~ n", n);
