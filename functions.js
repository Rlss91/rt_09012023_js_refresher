let n1 = 1,
  n2 = 1;

let sum = n1 + n2;

//es5
function add_old_way(parameter1, parameter2) {
  let sum2 = parameter1 + parameter2;
  console.log("🚀 ~ file: functions.js:9 ~ add_old_way ~ sum2", sum2);
}

add_old_way(2, 2);

function add_old_way_get_result(parameter1, parameter2) {
  let sum2 = parameter1 + parameter2;
  return sum2;
}

let res = add_old_way_get_result(4, 4);
console.log("🚀 ~ file: functions.js:20 ~ res", res);

//es6+
const add_new_way = (p1, p2) => {
  let sum2 = p1 + p2;
  console.log("🚀 ~ file: functions.js:25 ~ sum2", sum2);
};
add_new_way(2, 2);

const add_new_way_result = (p1, p2) => {
  let sum2 = p1 + p2;
  return sum2;
};
res = add_new_way_result(4, 4);

const add_normal_way = (p1, p2) => {
  return p1 + p2;
};

//!note that the function must be only one line of code!!!
const add_shortcut = (p1, p2) => p1 + p2;

res = add_shortcut(4, 4);

//const oneParam = p1 => p1 * 5;
//res = oneParam(5)

const calc = (p1 = 1, p2 = 1, op = "+") => {
  // console.log({ p1, p2, op });
  switch (op) {
    case "-":
      return p1 - p2;
    case "*":
      return p1 * p2;
    case "/":
      return p1 / p2;
    default:
    case "+":
      return p1 + p2;
  }
};
console.log(calc());
