/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{var numerouno = document.getElementById ("numeroUno").value;
var numerodos = document.getElementById ("numeroDos").value;
var resultado;
numerouno = parseInt (numerouno);
numerodos = parseInt (numerodos);
resultado = numerouno + numerodos;
alert ("la suma es " + resultado); 

}

function restar()

{var numerouno = document.getElementById ("numeroUno").value;
var numerodos = document.getElementById ("numeroDos").value;
var resultado;
numerouno = parseInt (numerouno);
numerodos = parseInt (numerodos);
resultado = numerouno - numerodos;
alert ("la resta es " + resultado); 
}

function multiplicar()
{ var numerouno = document.getElementById ("numeroUno").value;
var numerodos = document.getElementById ("numeroDos").value;
var resultado;
numerouno = parseInt (numerouno);
numerodos = parseInt (numerodos);
resultado = numerouno * numerodos;
alert ("El resultado de la multiplicacion es " + resultado); 
	
}

function dividir()
{var numerouno = document.getElementById ("numeroUno").value;
var numerodos = document.getElementById ("numeroDos").value;
var resultado;
numerouno = parseInt (numerouno);
numerodos = parseInt (numerodos);
resultado = numerouno / numerodos;
alert ("El resultado de la division es " + resultado); 
	
}

