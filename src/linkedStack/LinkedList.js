module.exports = class LinkedStack {
    constructor() {
      this.top = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length++;
    }
  
    pop() {
      if (this.top === null) {
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.length--;
      return poppedNode.value;
    }
  
    peek() {
      return this.top !== null ? this.top.value : null;
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    getLength() {
      return this.length;
    }
  }