// Métodos de cadenas de texto (Parte 3)
// https://regexr.com
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles";

console.log(texto_largo.match(/no/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"));

// Saber si un texto enpieza con una palabra
console.log(texto_largo.startsWith("Tito"));
console.log(texto_largo.startsWith("árboles"));
// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("arboles"));
console.log(texto_largo.endsWith("."));