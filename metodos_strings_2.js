// Métodos de cadenas de textos (parte 2)
let input = "Capricornio";
let db = "capricornio";

// toLowerCase - toUpperCase
console.log(input === db);
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase);

// Formas de concatenar cadenas
let str1 = "Hola Soy la primer cadena";
let str2 = "Hola soy la cadena 2";
console.log(str1.concat(" ", str2));
console.log(str1 + " " +  str2);
console.log(`${str1} ${str2}`);

// Eliminar espacios al inicio y al final
let str3 = "Hola soy un stirng con espacios al final";
let str4 = "       Hola soy una cadena con espacio al inicio";
console.log(str3.length);
console.log(str3.trim().length);
console.log(str4.trimStart().length);

// Obtener la letra que hay en cierta posición
let str5 = "Hola soy el string 5";
console.log(str5.charAt(5));
console.log(str5[6]);

// Obtener la posicion de una palabra dentro de una cadena
let str6 = "Hola soy Juan David y me gusta el futbol. Mi nombre es Juan David.";
console.log(str6.indexOf("David"));
console.log(str6.lastIndexOf("David"));