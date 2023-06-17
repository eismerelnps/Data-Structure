class Student {
  constructor(name, faculty, year) {
    this.name = name;
    this.faculty = faculty;
    this.year = year;
    this.next = null;
  }
}

module.exports = class Estudiantes_Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(name, faculty, year) {
    const newStudent = new Student(name, faculty, year);
    if (this.rear === null) {
      this.front = newStudent;
      this.rear = newStudent;
    } else {
      this.rear.next = newStudent;
      this.rear = newStudent;
    }
    this.length++;
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }
    const dequeuedStudent = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.length--;
    return dequeuedStudent;
  }

  getFront() {
    return this.front !== null ? this.front : null;
  }

  isEmpty() {
    return this.front === null;
  }

  getLength() {
    return this.length;
  }
};

// Usage example
//   const queue = new LinkedQueue();
//   queue.enqueue("John Doe", "Faculty of Engineering", 2023);
//   queue.enqueue("Jane Smith", "Faculty of Medicine", 2022);
//   queue.enqueue("David Johnson", "Faculty of Science", 2024);

//   console.log(queue.getFront()); // Student { name: 'John Doe', faculty: 'Faculty of Engineering', year: 2023, next: null }
//   console.log(queue.isEmpty()); // false
//   console.log(queue.getLength()); // 3

//   console.log(queue.dequeue()); // Student { name: 'John Doe', faculty: 'Faculty of Engineering', year: 2023, next: null }
//   console.log(queue.getFront()); // Student { name: 'Jane Smith', faculty: 'Faculty of Medicine', year: 2022, next: null }

//   queue.enqueue("Lisa Brown", "Faculty of Arts", 2025);
//   console.log(queue.getFront()); // Student { name: 'Jane Smith', faculty: 'Faculty of Medicine', year: 2022, next: Student { name: 'Lisa Brown', faculty: 'Faculty of Arts', year: 2025, next: null } }
//   console.log(queue.getLength()); // 3

//   console.log(queue.dequeue()); // Student { name: 'Jane Smith', faculty: 'Faculty of Medicine', year: 2022, next: null }
//   console.log(queue.dequeue()); // Student { name: 'David Johnson', faculty: 'Faculty of Science', year: 2024, next: null }
//   console.log(queue.dequeue()); // Student { name: 'Lisa Brown', faculty: 'Faculty of Arts', year: 2025, next: null }

//   console.log(queue.getFront()); // null
//   console.log(queue.isEmpty()); // true
//   console.log(queue.getLength()); // 0
