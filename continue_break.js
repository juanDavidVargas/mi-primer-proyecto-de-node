// Continue and break en JS
// Casos muy específicos - break, continue
console.log("----------------------- Continue-break ---------------------------");

let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);

    if(lista[i] === 3){
        continue;
    }

    var j = 50;
    console.log(lista[i]);
    
    if(lista[i] > 5){
        break;
    }

    console.log(lista[i]);
}

// Cuál es el ámbito de un bucle
console.log(i);
console.log(j);
