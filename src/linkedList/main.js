// Node class represents a single node in the linked list
class Node {
    constructor(data, amount) {
      this.data = data; // data stored in the node
      this.next = null; // reference to the next node
      this.amount = amount; // count of occurrences
    }
  }
  
  // LinkedList class represents the linked list
  modue.exports = class LinkedList {
    constructor() {
      this.head = null; // reference to the head (first node) of the list
    }
  
    // Method to add a node to the end of the linked list
    append(data) {
      if (!this.head) {
        this.head = new Node(data, 1);
      } else {
        let current = this.head;
  
        while (current.next) {
          if (current.data === data) {
            current.amount++;
            console.log(current.data + ' igual a ' + data);
            return;
          }
          current = current.next;
        }
  
        if (current.data === data) {
          current.amount++;
          console.log(current.data + ' igual a ' + data);
        } else {
          const newNode = new Node(data, 1);
          current.next = newNode;
        }
      }
    }
  
    // Method to display the linked list
    display() {
      let current = this.head;
      while (current) {
        console.log('node');
        console.log(current.data);
        console.log(current.amount);
        current = current.next;
      }
    }
  }
  
  // Usage example
//   const linkedList = new LinkedList();
//   linkedList.append(1);
//   linkedList.append(2);
//   linkedList.append(3);
//   linkedList.append(1);
//   linkedList.append(1);
//   linkedList.append(3);
  
//   linkedList.display();
  