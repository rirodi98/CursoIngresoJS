/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{var dividendo = document.getElementById ("numeroDividendo").value;
var divisor = document.getElementById ("numeroDivisor").value;
var resultado;
dividendo = parseInt (dividendo);
divisor = parseInt (divisor);
var resultado = dividendo % divisor;
alert ("El resto o porcentaje es " + resultado); 
	
}
