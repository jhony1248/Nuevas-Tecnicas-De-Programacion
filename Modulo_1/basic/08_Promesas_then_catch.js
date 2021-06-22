/*
....Promesas
*/

function promesa(bandera) {
    return new Promise((resolve, reject) =>{
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);
        }else{
            setTimeout(() => {
                reject("La promesa fallo")
            }, 2000);
        }      
    })
}

/*
promesa(false)
    .then((resultado) =>{
        console.log("Respuesta positiva", resultado);
    })
    .catch((error) => {
        console.log("Error", error);
    })
*/

var segundaPromesa = (bandera) => new Promise((resolve, reject) =>{
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);
    }else{
        setTimeout(() => {
            reject("La promesa fallo")
        }, 2000);
    }      
})

segundaPromesa(true)
    .then((resultado) =>{
        console.log("Respuesta positiva", resultado);
    })
    .catch((error) => {
        console.log("Error", error);
    })

promesa(true) // peticion de clientes
    .then((Respuesta) => { // respuesta de lista de clientes
        console.log(Respuesta);
        return segundaPromesa(true) // Compras de clientes
    })
    .then((Respuesta) => { //respuesta de la segunda promesa
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })