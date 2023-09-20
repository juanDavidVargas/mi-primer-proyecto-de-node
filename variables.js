var variable;
let variablelet;

const constante = "Hola, soy una constante";
console.log(constante);

var a = 1;
console.log(a);

a = 5;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}

console.log(variable);

let variablelet_ = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variablelet_ = "Soy la segunda variable LET";
}

console.log(variablelet_);
console.log(typeof 1); // Type of nos dice que te tipo es una variable