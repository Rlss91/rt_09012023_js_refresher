let obj = {
  name: "kenny",
  age: 8,
};

let strJson = "{'name':'kenny', 'age':8}";

//obj/arr/var to json
strJson = JSON.stringify(obj);
console.log("🚀 ~ file: json.js:10 ~ strJson", strJson);

//from json to obj/arr/var
obj = JSON.parse(strJson);
console.log("🚀 ~ file: json.js:14 ~ obj", obj);
