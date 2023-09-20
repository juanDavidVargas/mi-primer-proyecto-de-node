// Bifurcaciones - If- Else

console.log("---------------- Bifurcaciones ---------------------------");

let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
}

if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
    
} else {
    console.log("Saldo Insuficiente");
}

console.log("-------------- If els + If else ------------------------------------");
let nota = 5;
if (nota = 5) {
    console.log("Enhorabuena, has obtenido un sobresaliente");
} else if(nota == 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor.");
} else if (nota == 3) {
    console.log("Has obtenido insuficiente.");
} else if (nota == 2) {
    console.log("No has aprobado por poco");
} else if(nota == 1) {
    console.log("No has estudiado nada, esfuerzate un poco más para la próxima");
} else {
    console.log("Error", "Introduce una nota entre 1 y 5");
}

console.log("----------------------------------- Switch -----------------------------------");

switch (nota) {
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente");
        break;

    case 4:
        console.log("Buen trabajo, pero podrías haberlo hecho mejor.");
        break;

    case 3:
        console.log("Has obtenido insuficiente.");
        break;

    case 2:
        console.log("No has aprobado por poco");
        break;

    case 1:
        console.log("No has estudiado nada, esfuerzate un poco más para la próxima");
        break;

    default:
        console.log("Error, Intoruce una nota entre 1 y 5");
        break;
}



