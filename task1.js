const tree = [
  {
    id: "1",
    data: [
      {
        id: "2",
        data: [
          {
            id: "3",
            data: null,
          },
          {
            id: "4",
            data: [
              {
                id: "5",
                data: [
                  {
                    id: "6",
                    data: null,
                  },
                ],
              },
              {
                id: "7",
                data: [
                  {
                    id: "8",
                    data: null,
                  },
                ],
              },
              {
                id: "9",
                data: null,
              },
            ],
          },
        ],
      },
      {
        id: "10",
        data: [
          {
            id: "11",
            data: null,
          },
          {
            id: "12",
            data: [
              {
                id: "13",
                data: [
                  {
                    id: "14",
                    data: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "15",
        data: null,
      },
    ],
  },
  {
    id: "16",
    data: null,
  },
];

function findNearestParentNode(...arguments) {
  // write code here
  const args = [...arguments];
  let parent = '0';
  let nodeList = [];

  if(args.length <= 2){
    nodeList = [...tree];
    while (nodeList.length > 0) {
      const currentNode = nodeList.pop();
      let childrens = currentNode.data;
      
      if (childrens) {
        for (var i = childrens.length - 1; i >= 0; i--) {
          if (childrens[i].id == arguments[0]) {
            parent = currentNode.id;
            args.shift();
            if (!args.length) {
              nodeList.length = 0;
            }
          }
          nodeList.push(childrens[i]);
        }
      }else{
        if(args.includes(currentNode.id)){
          const index = args.findIndex((item)=> item === currentNode.id);
          if(index !== -1){
            args.shift();
          }
        }
      }
    }
    return parent;
  }

  nodeList.push({id: '0', data: tree});
  
  while (nodeList.length > 0) {
    const currentNode = nodeList.shift(0);
    if(currentNode.data){
      parent = currentNode.id;
      const { data } = currentNode;
      for (let i = 0; i < data.length; i++) {
        if(args.includes(data[i].id)){
          nodeList.length = 0;
        }else{
          const index = args.findIndex((item)=>item === data[i].id);
          if(index !== -1){
            args.splice(index, 1);
          }
        };
        if(!args.length){
          nodeList.length = 0;
        }
        nodeList.push(data[i]);
      }
    }
  }
  return parent;
}

module.exports = { findNearestParentNode };
// Output:
//console.log(findNearestParentNode('9')) // '1'
