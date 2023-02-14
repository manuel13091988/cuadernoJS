// ejercicio I.

// Funcion constructora  
function Datos(n, ap, rt, dr, cm, ciu, est, cur){
    this.Nombre = n;
	this.Apellidos = ap;
	this.Edad = 0;
	this.fechaNac = 0;
	this.Rut = rt;
	this.Direccion = dr;	
	this.Comuna = cm;
	this.Ciudad = ciu;
	this.Estudios = est;
	this.Cursando = cur;
	this.PXTurno = 0;
	this.ingDiario = 0;
	}

// ingreso de Objeto 
var Manuel = new Datos("Manuel Luis", "Chavez Araos", 
33, 13 + "/" + 09 + "/" + 1988, 17023769 + "-" + 2,
 "Psj Quiñe " + 3688 + " dpto " + 33 + " Villa el Caleuche", 
"Puente Alto", "Santiago", "Informatica", true, 21000, 10000)

// Metodo que ingresa Valor de PXTurno e ingDiario al Objeto. y calcula el monto a cobrar
Datos.prototype.Calcular_Salario = function(PXTurno, ID, DiasTrab, Turnos) {         
    var DT = Turnos * PXTurno;
    var Dtrb = DiasTrab * ID;
    var Total = DT + Dtrb;
  this.PXTurno = "$" + PXTurno;
  this.ingDiario = "$" + ID; 
  this.Turnos_Trabajados = "$" + DT;
  this.Monto_acumulado = "$" + Dtrb;   
  this.Total_a_cobrar = "$" + Total;
   }

// Metodo de ingreso de fecha de nacimiento 
Datos.prototype.addDate = function(day, month, year){
    let fechanc = `${day}/${month}/${year}`;
    return this.fechaNac = fechanc;
  }
  
  // Funcion que ingresa la fecha de nacimiento y calcula la edad del individuo.
  function fechayEdad(nombre, dayi, monthi, yeari){
    var today = new Date();
    var month = today.getMonth() +1;
    var day = today.getDate();
    var year = today.getFullYear();
      let cd = day - dayi;
      let cm = monthi - month;
      let cy = year - yeari;
      if(cm <= 0 && cd <= 0) {
        nombre.Edad = cy;
      } else {
      nombre.Edad = cy-1;
      }
      nombre.addDate(dayi, monthi, yeari);
      this.fechaNac = `${dayi}/${monthi}/${yeari}`;
    }
  
  
