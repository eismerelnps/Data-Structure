module.exports =  class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



// Usage example
const stack = new LinkedStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.isEmpty()); // false
console.log(stack.getLength()); // 3

console.log(stack.pop()); // 30
console.log(stack.peek()); // 20

stack.push(40);
console.log(stack.peek()); // 40
console.log(stack.getLength()); // 3

console.log(stack.pop()); // 40
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10

console.log(stack.peek()); // null
console.log(stack.isEmpty()); // true
console.log(stack.getLength()); // 0
