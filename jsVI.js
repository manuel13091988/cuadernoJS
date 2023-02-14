									//Funciones Callback
									
									
//Estas funciones decir hola al usuario y decir adios al usuario solicitan un argumento llamado usuario

		function decirHolaAlusuario(usuario) {
			return "Hola, " + usuario + "!";
		}

		function decirAdiosalUsuario (usuario) {
			return "Adios, " + usuario + "!";
		}

// Esta funcion recibe 2 argumentos Usuario y una propiedad que es definida como funcion de las dos que ya existen

		function crearSaludo (usuario, cb) {
			return cb(usuario);
		}
// cb = Callback es un llamado a una funcion anterior es decir en español seria llamar la anterior 

		crearSaludo("Manuel", decirHolaAlusuario);
		crearSaludo("Manuel", decirAdiosalUsuario);


 //en estos siguuentes dos ejemplos podemos apreciar que ambas 
 //funciones cumplen el mismo obetivo pero con tipos de programaciones diferentes 
		var alumnos = ["Maty", "Leo", "Tincho", "Emi", "Jimmy", "Franco"]

//a este tipo de programacion se le llama "Imperativa" puesto que lleva una descripcion detallada de lo que se quiere hacer 
//por ejemplo al escribir este codigo le decimos literalmente al editor. 
// Para la Variable i que inicie en 0 y que avance de menor a mayor por los elementos de la matiz del arreglo hatas 
// acompletar en asenso 
// y extraiga el nombre de cada elemento y lo imprima uno a la vez 
		for (var i = 0; i< alumno.length; i ++) {
			console.log(alumno[i]);
		}

//forEach es una propiedad de arreglo que invoca una funcion en cada elemento de la matriz del arreglo por cada vez ejemplo 
		alumnos.forEach = function(elemnto, Indice) {
			console.log(elemnto);
		}
 // esto nos mostrará cada elemento de la matriz en una fila hacia abajo. 
 //podemos apreciar que este tipo de programacion es un tipo de programacion "Declarativa" ya que 
 // cada propiedad cumple una funcion ahorrandonos linea de codigo y otorgandonos productividad 
 //array.map esta propiedad crea un elemento nuevo para cada elemento de x arreglo 
		 var numeros = [1, 5, 10, 15];
		 var doubles = 	Number.map(function(x) {
			 return x * 2;
		 });
		 
//crearemos un nuevo arreglo de las dos maneras conocidas 
 
//Este es el arreglo original 

		var alumnos = ["maty", "leo", "tincho", "emi", "jimmy", "franco"] 
		 
		 String.prototype.capitalize = function() {
			 
			 return this.chartAt(0).toUpperCase() + this.slice(l)
		 
		 }
		 
//Con callback
		 
		 var nuevoAlumnos = alumnos.map(function(elemento, indice) {
			
			return elemento.capitalize();

			})		 
		 
//sin callback
		 let nuevoArray = [];
		 for(var i = 0; i < alumno.length; i ++) {
			 nuevoArray.push(alumno[i].capitalize());
		 }
			 
//metodo reduce eecuta una funcion reductora sobre cada elemento del array.
		 
		 var nums = [1, 2, 3, 4, 5, 6]
		 
//sin callback 
		 
		 var suma = 0 
		 for (var i = 0; i < nums.length; i++) {
			 suma = suma + 	nums[i];
		 }
		 
// con callback
		 
		 var sumaReduce = nums.reduce(function(acumulador, elemento) {
				
				return acumulador + elemento;
	
		 }, 0);
//este es el valor del acumulador pero por defecto es 0
 
 
 