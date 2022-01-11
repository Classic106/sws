let { findNearestParentNode } = require("./task1");

it("find Nearest Parent Node", function () {
  let expectedResult = "2";
  let result = findNearestParentNode("3", "5");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("find Nearest Parent Node", function () {
  let expectedResult = "10";
  let result = findNearestParentNode("12", "13");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("find Nearest Parent Node", function () {
  let expectedResult = "4";
  let result = findNearestParentNode("6", "8", "9");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("find Nearest Parent Node", function () {
  let expectedResult = "4";
  let result = findNearestParentNode("9");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("find Nearest Parent Node", function () {
  let expectedResult = "0";
  let result = findNearestParentNode("1", "16");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("find Nearest Parent Node", function () {
  let expectedResult = "0";
  let result = findNearestParentNode("14", "16");
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
