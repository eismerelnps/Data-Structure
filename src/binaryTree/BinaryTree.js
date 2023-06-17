const  Node = require( "./Node");
 
 class BinaryTree {
    constructor(root){
    this.root = root    
    }



    binarySearch(value){
       return this.recursiveBinarySearch(this.root, value); 
    }
    recursiveBinarySearch(node, value){
        if(node !== null ){
            
           if(node.value === value){
           return node;
           
           }

           if(node.value > value){
            return this.recursiveBinarySearch(node.left, value);
           }else{
            return this.recursiveBinarySearch(node.right, value);
           }
        }
    }
    Insert(value){
        return this.recursiveInsert(this.root, value);
    }
    
    recursiveInsert(node, value) {
        if (node === null) {
            return new Node(value);
        }
    
        if (value < node.value) {
            node.left = this.recursiveInsert(node.left, value);
        } else if (value > node.value) {
            node.right = this.recursiveInsert(node.right, value);
        } else {
            throw new Error("Cannot insert node with duplicate value");
        }
    
        return node;
    }
    
}
module.exports = BinaryTree;