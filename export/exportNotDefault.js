const min = (arr) => {
  let min = arr[0];
  for (let item of arr) {
    if (min > item) {
      min = item;
    }
  }
  return min;
};

const max = (arr) => {
  let max = arr[0];
  for (let item of arr) {
    if (max < item) {
      max = item;
    }
  }
  return max;
};

export { min, max };
