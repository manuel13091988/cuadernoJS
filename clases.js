
  			//Funcion constructora
 // este tipo de funciones son ocupadas para crear plantillas  
 function Familia(option) {
	this.Nombre = option.Nombre;
	this.Apellidos = option.Apellidos;
	this.Edad = option.Edad;
	this.fechaNac = option.fechaNac;
	this.Rut = option.Rut;
	this.Direccion = option.Direccion;	
	this.Comuna = option.Comuna;
	this.Ciudad = option.Ciudad;
	this.Estudios = option.Estudios;
	this.Cursando = option.Cursando;
	this.PXTurno = option.PXTurno;
	this.ingDiario = option.ingDiario;
	}

			//Ingresar Objeto a funcion constructora 

 var Manuel = new Familia("Manuel Luis", "Chavez Araos", 
33, 13 + "/" + 09 + "/" + 1988, 17023769 + "-" + 2,
 "Psj Quiñe " + 3688 + " dpto " + 33 + " Villa el Caleuche", 
"Puente Alto", "Santiago", "Informatica", true, 21000, 10000)

 //		Objetos Ingresados [Manuel, Carla, Amitiel]

		//Crea una Funcion dentro de una Propiedad de Objeto a esto se le llama metodo	

Manuel.Calcular_Salario = function(DiasTrab, Turnos) {                                                     
 var DT = Turnos * this.PXTurno;                                                                          
 var Dtrb = DiasTrab * this.ingDiario;
 var Total = DT + Dtrb;                                                                    
 return "El monto a cobrar por los turnos trabajados es de : " + DT + 
 " y el monto acumulado en sus ingresos fue de: " + Dtrb + " Total: " + Total;
 }
//Funcion Informativa de la suma de las dos Propiedades de imgreso

 