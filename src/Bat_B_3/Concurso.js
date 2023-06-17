const Ejercicios_Stack = require("./Ejercicios_Stack");
const Estudiantes_Queue = require("./Estudiantes_Queue");
const Resultados_List = require("./Resultados_List");

const students = new Estudiantes_Queue();
students.enqueue("Eismer", "FTE", 1);
students.enqueue("Andrey", "FTE", 2);
students.enqueue("Carlos", "FTE", 3);
students.enqueue("Yasser", "FTE", 4);
students.enqueue("Sergio", "FTE", 2);
students.enqueue("Fulano", "FTE", 3);

const exercices = new Ejercicios_Stack();
exercices.push("Primero", 5, 1);
exercices.push("Seg", 2, 3);
exercices.push("TER", 3, 3);
exercices.push("CUAR", 5, 4);
exercices.push("QUIN", 2, 2);
exercices.push("SEX", 5, 2);

const assignExercice = () => {
  while (!exercices.isEmpty() && !students.isEmpty()) {
    student = students.getFront();
    console.log(student.name);

    exersice = exercices.peek();
    console.log(exersice.description);

    if (student.year === exersice.year) {
      exercices.pop();
      students.dequeue();
      console.log(" coincide");
    } else {
      console.log("no coincide");
      students.dequeue();
      students.enqueue(student.name, student.faculty, student.year);
    }
    console.log("................................");
  }
};
assignExercice();

//console.log(students.getLength());
//console.log(students.getFront());
//console.log(students.isEmpty());
