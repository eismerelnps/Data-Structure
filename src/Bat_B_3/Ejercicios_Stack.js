class Exercice {
    constructor(description,  value, year) {
      this.description = description;
      this.value = value;
      this.year = year;
      this.next = null;
    }
  }
  
  module.exports = class Ejercicios_Stack {
    constructor() {
      this.top = null;
      this.length = 0;
    }
  
    push(description, value, year) {
      const newNode = new Exercice(description, value, year);
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
    //  console.log('pop'+ poppedNode.description)

      this.top = poppedNode.next

    //   this.top = this.top.next;
      //console.log('new' + this.top.description)

      this.length--;
      return poppedNode;
    }
  
    peek() {
      return this.top !== null ? this.top : null;
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    getLength() {
      return this.length;
    }
  }
  