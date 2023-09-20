// labels
console.log("----------------------- Labels ------------------------------------");
let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    console.log("El número actual es: " + decenas + unidades);
    bucleUnidades: while (true) {
        unidades = unidades + 1;
        if (unidades === 10){
            unidades = 0;
            break bucleUnidades;
        }

        if (decenas === 2){
            console.log("El número actual es: " + decenas + unidades);
            break bucleDecenas;
        }
    }
    decenas++;
}
console.log("Ya hemos terminado");
