const testObject = [
  {
    a: 1,
    b: 5,
    c: 2,
  },
  [78, 33, 4],
  {
    c: {
      d: 32,
      e: 22,
    },
  },
  2,
  1,
  50,
];

const parseDataToPlainArr = (data) => {
  let arr = [];
  data.forEach((el) => (arr = arr.concat(getValue(el))));
  return [...new Set(arr)].sort();

  function getValue(data) {
    let arr = [];
    if (Array.isArray(data)) {
      for (let key in data) {
        arr.push(data[key]);
      }
      return arr;
    } else if (typeof data === "object") {
      for (let key in data) {
        arr = arr.concat(getValue(data[key]));
      }
      return arr;
    }
    return [data];
  }
};

console.log(parseDataToPlainArr(testObject));
// output: [1, 2, 4, 5, 22, 32, 33, 50, 78];
