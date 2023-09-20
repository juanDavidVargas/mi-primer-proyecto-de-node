
// Listas --> array o arreglo conjunto de variables puestas en orden
console.log("------------------- Listas --------------------------------");

const lista = [1, "hola", true, undefined, null];
console.log(lista);

const lista2 = new Array(1, "hola", true, undefined, null);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];
console.log(lista4);

// Objetos
console.log("---------------------------- Objetos ----------------------");
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}

// Adicionado un nuevo atributo al objeto
movil.anio = 2019;

// Modificando el valor de un atributo
movil.marca = "Samsung";

console.log(movil);
console.log(movil.contactos);

// Fechas
// Librerías de apoyo --> moment.js
console.log("------------------ Fechas -------------------------------");
const ahora = new Date();
console.log(ahora);
const fecha_milis = new Date(10);
console.log(fecha_milis);
const fecha_cadena = new Date("March 25 2020");
console.log(fecha_cadena);
const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);
const dia = ahora.getDay();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getUTCFullYear();
console.log(dia, mes, anyo);



