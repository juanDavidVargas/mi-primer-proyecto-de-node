// Comparaciones
console.log("----------------------- Comparaciones --------------------");

// Igualdad --> ==, ===

if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;
let b = "5";

if (a == b) {
    console.log("A es igual a B");
}

if (a === b) {
    console.log("A no es igual a B");
}

let c = 4;
let d = 10;
if (c != d) {
    console.log("c es diferente a d - Débil");
}

if (c !== d) {
    console.log("c es diferente a d - Fuerte");
}

// Comparaciones <,>
let max = 10;
let min = 5;

if (max > min) {
    console.log("Max mayor que min");
}

if(min < max) {
    console.log("Min es menor que max");
}