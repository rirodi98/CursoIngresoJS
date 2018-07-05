/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{var sueldo = document.getElementById ("sueldo").value;
var resultado = document.getElementById ("resultado").value;
var porcentaje = sueldo * 10/100;

sueldo = parseInt (sueldo);
resultado = sueldo + porcentaje;
alert ("el resultado es " + resultado);


}
