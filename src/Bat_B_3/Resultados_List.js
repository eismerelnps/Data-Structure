class Results{
    constructor(name, rating){
        this.name = name;
        this.rating = rating;
        this.next = null;
    }
}
  
 module.exports =  class Resultados_List {
    constructor() {
      this.primero = null;
      this.ultimo = null;
    }
  
    add(name, rating) {
      const nuevoEstudiante = new Estudiante(name, rating);
      if (this.primero === null) {
        this.primero = nuevoEstudiante;
        this.ultimo = nuevoEstudiante;
      } else {
        this.ultimo.siguiente = nuevoEstudiante;
        this.ultimo = nuevoEstudiante;
      }
    }
  
    print() {
      let nodoActual = this.primero;
      while (nodoActual !== null) {
        console.log(`Nombre: ${nodoActual.nombre}, Calificación: ${nodoActual.calificacion}`);
        nodoActual = nodoActual.siguiente;
      }
    }
  
    search(nombre) {
      let nodoActual = this.primero;
      while (nodoActual !== null) {
        if (nodoActual.nombre === nombre) {
          return nodoActual.calificacion;
        }
        nodoActual = nodoActual.siguiente;
      }
      return null;
    }
  
    delete(nombre) {
      if (this.primero === null) {
        return;
      }
      if (this.primero.nombre === nombre) {
        this.primero = this.primero.siguiente;
        if (this.primero === null) {
          this.ultimo = null;
        }
        return;
      }
      let nodoActual = this.primero;
      while (nodoActual.siguiente !== null) {
        if (nodoActual.siguiente.nombre === nombre) {
          nodoActual.siguiente = nodoActual.siguiente.siguiente;
          if (nodoActual.siguiente === null) {
            this.ultimo = nodoActual;
          }
          return;
        }
        nodoActual = nodoActual.siguiente;
      }
    }
  }
  
//   // Ejemplo de uso
//   const lista = new ListaEnlazada();
//   lista.agregar("Juan", 90);
//   lista.agregar("María", 85);
//   lista.agregar("Carlos", 95);
  
//   lista.recorrer();
  
//   console.log(lista.buscar("María")); // 85
  
//   lista.eliminar("María");
  
//   lista.recorrer();
  