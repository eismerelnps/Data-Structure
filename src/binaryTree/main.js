const  Node = require( "./Node");
const BinaryTree = require("./binaryTree");


const root = new Node(60);
const tree = new BinaryTree(root);

 //console.log(root)
// console.log(tree)


//const rootRight = new Node(12);
//const rootLeft = new Node(8);
//const rootLeftLeft = new Node(6);

// root.setLeft( rootLeft);
// root.setRight( rootRight);
// rootLeft.setLeft(rootLeftLeft)

//console.log(tree.binarySearch(10));

const root2 = new Node(60);
const tree2 =  new BinaryTree(root2)

tree2.Insert(70);
tree2.Insert(59);

tree2.Insert(71)
tree2.Insert(50)
tree2.Insert(30)
tree2.Insert(20)
tree2.Insert(45)
tree2.Insert(0)
tree2.Insert(5)

console.log(tree2.binarySearch(60));
console.log(tree2.binarySearch(45));