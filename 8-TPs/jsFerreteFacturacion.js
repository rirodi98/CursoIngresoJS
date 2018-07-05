/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
preciouno = document.getElementById ("PrecioUno").value;
preciodos = document.getElementById ("PrecioDos").value;
preciotres = document. getElementById ("PrecioTres").value;
var resultado;
preciouno = parseInt (preciouno);
preciodos = parseInt (preciodos);
preciotres = parseInt (preciotres);
resultado = preciouno + preciodos + preciotres;
alert ("La suma es " + resultado);	

}
function Promedio () 
{preciouno = document.getElementById ("PrecioUno").value;
preciodos = document.getElementById ("PrecioDos").value;
preciotres = document. getElementById ("PrecioTres").value;
var resultado;
var promedio;
preciouno = parseInt (preciouno);
preciodos = parseInt (preciodos);
preciotres = parseInt (preciotres);
promedio = preciouno + preciodos + preciotres;
resultado = promedio / 3;
alert ("El promedio es " + resultado);
	
}
function PrecioFinal () 
{preciouno = document.getElementById ("PrecioUno").value;
preciodos = document.getElementById ("PrecioDos").value;
preciotres = document. getElementById ("PrecioTres").value;
var preciofinal;
preciouno = parseInt (preciouno);
preciodos = parseInt (preciodos);
preciotres = parseInt (preciotres);
preciofinal = preciouno + preciodos + preciotres * 21/100;
alert ("El precio final es " + preciofinal);
	
}