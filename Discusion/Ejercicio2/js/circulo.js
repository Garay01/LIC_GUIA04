/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: circulo.js *
* Uso: Calcular el área de un círculo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
const PI = 3.28084;
var radio = prompt('Introduzca el dato en metros:','');
var area;
area = radio*PI;
document.write(`<header><h1>${radio}mts son en pies:` + area + "</h1><hr /><br/></header>");