console.log("----------------------- Métodos Strings --------------------");
// Métodos más utilizados con las cadenas
// Longitud de un String
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// Slice(), substring(), substr()
let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(0, 10);
console.log(substring_str);

let substr_str = str.substr(0, 10);
console.log(substr_str);

// Reemplazar parte de una cadena de texto
let cadena = "Hola mi nombre es Juan";
console.log(cadena);
console.log(cadena.replace('Juan', 'Juan David'));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles";

console.log(texto_largo.replace('los', 'cinco'));

// Al utilizar la expresión regular /g (global), reemplaza todas las coincidencias.
console.log(texto_largo.replace(/los/g, 'cinco'));
