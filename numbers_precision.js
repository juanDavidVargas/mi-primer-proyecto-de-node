// Principales operacones aritmeticas
let a = 3.5;
let b = 4.8;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Representacion de los numeros en cadenas
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof(a_s));

// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
// toFixed --> Limitar el numero de decimales al valor x
console.log(d.toFixed(2));
let e = 1839.1232456789;
let f = 1213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));
// toPrecision(x) --> Limita el número de cifras significativas
console.log(e.toPrecision(4));
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));