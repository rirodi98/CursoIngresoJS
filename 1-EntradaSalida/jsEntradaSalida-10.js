/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var importe = document.getElementById ("importe").value;
var resultado = document.getElementById ("resultado").value;
var descuento = importe * 25/100;

importe = parseInt (importe);
resultado = importe - descuento;
alert ("el resultado es " + resultado)
	
}
/* Resuelto jaja */