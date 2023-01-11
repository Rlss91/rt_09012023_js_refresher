const f1 = () => {
  console.log("you called f1");
};

const f2 = (funcParam) => {
  funcParam();
};

f2(f1);
