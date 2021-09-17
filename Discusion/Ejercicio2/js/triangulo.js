/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

const PI = 1.09361;
var radio = prompt('Introduzca el dato en metros:','');
var area;
area = radio*PI;
document.write(`<header><h1>${radio}mts son en yardas:` + (Math.round(area *100) / 100) + "</h1><hr /><br/></header>");