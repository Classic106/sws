const { tree } = require('./tree.js');
console.log(tree);
function findNearestParentNode(...arguments) {
  // write code here
  const args = [...arguments];
  let parent = '0';
  let nodeList = [];

  nodeList.push({id: '0', data: tree});
  
  while (nodeList.length > 0) {
    const currentNode = nodeList.shift();
    if(currentNode.data){
      parent = currentNode.id;
      const { data } = currentNode;
      for (let i = 0; i < data.length; i++) {
        if(args.includes(data[i].id)){
          nodeList.length = 0;
          break;
        };
        nodeList.push(data[i]);
      }
    }else{
      if(args.includes(currentNode.id)){
        break;
      };
    }
  }
  return parent;
}

module.exports = { findNearestParentNode };
// Output:
//console.log(findNearestParentNode('9')) // '1'
