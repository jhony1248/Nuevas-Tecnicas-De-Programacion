/*
concat
*/
var numeros = [1, 2, 3, 4, 5];
var nuevosNumeros = numeros.concat([6, 7, 8, 9, 0])


//console.log(numeros)
//console.log(nuevosNumeros);

/*
....JOIN
*/
var nombre = ["j", "h", "o", "n", "y", "n", "y"]
//console.log(nombre.join(";"));

/*
....SLICE
*/
//console.log(nombre.slice(2));

/*
....index of
*/

//console.log(nombre.indexof("a"));

/*
....last index of
*/

//console.log(nombre.lastIndexOf("y"));

/*
....reverse
*/
//console.log(nombre.reverse());

/*
....sort
*/
var numerosDespordenados = [1, 3, 2, 5, 4, 7, 6]
//console.log(numerosDespordenados.sort());

/*
....shift
*/

//console.log(numerosDespordenados.shift());

/*
....pop
*/

//console.log(numerosDespordenados.pop());

/*
....push
*/
//numerosDespordenados.push(1012)
//console.log(numerosDespordenados);

/*
....Map
*/
//var pares = [2, 4, 6, 8, 10]
//console.log(pares.map((elemento) => elemento + 1));

//consultar funciones de arreglos min 5

/*
*1.. includes
*/

const mascotas =  ["Gato", "Perro", "Loro"]
//console.log(mascotas.includes("Gato"));

/*
*..2 foreach
*/
const arre = [1, 2, 3, 4, 5, 6];

/*
arre.forEach((e) => {
    console.log(e);
});
*/

/*
*..3 filter
*/

//var filtrado = arre.filter(num => num > 3);
//console.log(filtrado);

/*
*..4 Every
*/
const arr = ["a", "b", "c", "d"];
arr.every((e) => e.length == 1);

/*
*..5 Array of
*/

var nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums);


