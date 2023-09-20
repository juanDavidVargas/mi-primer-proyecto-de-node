// Bucles - For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let j = 0; j < lista.length; j++) {
    console.log(lista[j] * 2);
}

// for...of
for(let valor of lista){
    console.log(valor);
}

// ForEach
lista.forEach(valor => {
    console.log(valor);
    
});

// For in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
};

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Bucle While
let i = 0;
let max = 10
while (i < max) {
    console.log(i);
    i++;
}

// Do-while
i = 0;
do {
    console.log(i);
    i++;
} while (i < max);