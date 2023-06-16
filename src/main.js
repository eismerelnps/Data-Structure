// Node class represents a single node in the linked list
class Node {
  constructor(data) {
    this.data = data; // data stored in the node
    this.next = null; // reference to the next node
    this.amount = null; // reference to the amount
  }
}

// LinkedList class represents the linked list
class LinkedList {
  constructor() {
    this.head = null; // reference to the head (first node) of the list
  }

  // Method to add a node to the end of the linked list
  add(data) {
    let amount;
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        if (currert.data === data) {
          amount++;
        }
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to display the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage example
const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(1);
linkedList.add(4);
linkedList.add(1);
linkedList.add(5);

linkedList.print();
