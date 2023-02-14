// en jsAvanzado podremos ver el uso de las Closures.
// estas son funciones que contienen dentro de su codilgo un llamado a otra funcion 
// como lo podemos ver en el siguente ejemplo.

// Esta funcion retorna una funcion que devuelve el numero de veses que fue inbocada. 
function counter(){
    let contador = 0;
    return function contadorCB(){
      contador = contador+1;
      return contador;
        }
    return contadorCB;
    }

    //declaramos una variable en el contexto global, que contiene la invocacon de la funccion 
var contar = counter();

