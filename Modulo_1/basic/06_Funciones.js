/*
.....Funciones declarativas
*/
//Retorno de valores
function saludar() {
    return "Hola soy Jhony";
}
// Funciones void
function saludar2() {
    console.log("Hola soy Jhony");
}
// funciones con parametros
function saludarConParemetros(nombre, apellido) {
    return `hola soy ${nombre} ${apellido}`
}
//funciones con parametros por defecto
function saludoConProfesion(nombre="Persona", profesion="Analista de Sistemas") {
    return `Hola ${nombre} mi profesion es ${profesion}`
}

//console.log(saludoConProfesion("Jhony", "Estudiante"));

//console.log(saludarConParemetros("Jhony", "Hurtado"));
// saludar()
//var resultado = saludar()
//console.log(resultado);
//console.log(saludar())
//saludar2()

/*
....Funciones Expresivas - Funciones Anonimas
*/

var saludoConEdad = function (nombre,edad){
    return `hola soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Jhony", 20));

/*
....Arrow funcion - funciones flecha
*/

var saludoConApellido = (nombre, apellido) =>  `Hola soy ${nombre} ${apellido}`

var suma = (num1, num2) => num1 + num2

//console.log(saludoConApellido("Jhony", "Hurtado"));
//console.log(suma(2, 3));

/*
....Funciones como parametros de otras funciones
*/

function saludoConFunciones(nombre,cb) {
    return cb(nombre)
}

var miSaludo = saludoConFunciones("Jhony", function(nombre) {
    return `hola soy ${nombre}`
})

var miSaludo2 = saludoConFunciones("Jhony", (nombre)=> `hola soy ${nombre}`)
console.log(miSaludo2);

/*
setTimeout(() => {
    console.log("Hola Mundo");
}, 3000;
*/

/*
setInterval(() => {
    console.log("Hola Mundo");
}, 2000);
*/