const express = require('express');

// genero una aplicacion express
const app = express();

/*
// Router
const {RouterIndex} = require('./Routes/index');


app.use("/", RouterIndex)
//app.use("/user", RouterIndex)
//app.use("/user/data", RouterIndex)

/*
    "/" + "/" = "//" => "/"
    "/" + "/saludo" = //saludo => "/saludo"
    "/" + /saludo/:nombre =//saludo/:nombre => /saludo/:nombre
*/

/*
....Deber
*/

const {RouterIndex} = require('./Routes/index');

app.use("/", RouterIndex)

app.listen(3000, () => {
    console.log("servidor escuchando en htpp://localhost:3000");
})