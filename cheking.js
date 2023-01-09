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

const printArr = (arrToPrint) => {
  if (!arrToPrint) {
    return null;
  }
  if (!Array.isArray(arrToPrint)) {
    return null;
  }
  for (let item of arrToPrint) {
    console.log("🚀 ~ file: cheking.js:32 ~ printArr ~ item", item);
  }
};
