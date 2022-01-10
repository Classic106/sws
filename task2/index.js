const { assets } = require("./data.js");

function printData(data, index = 0) {
  for (let key = 0; key < data.length; key++) {
    if (data[key].child) {
      console.log(`${"\t".repeat(index)}`, data[key].id, "{");
      printData(data[key].child, index + 1);
      console.log(`${"\t".repeat(index)}}`);
    } else {
      console.log(`${"\t".repeat(index)}`, data[key].id, 0);
    }
  }
}

printData(assets);
