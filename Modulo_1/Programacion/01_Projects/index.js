const express = require('express');
// genero una aplicacion express
const app = express()
// End point
app.get('/',(req, res) =>{
    res.send("Hola mundo con express3s")
})

app.get('/saludo', (req, res) =>{
    // req.query
    //console.log(req.query);
    const {query} =req;

    //const nombre = req.query.nombre
    //const apellido = req.query.apellido

    res.json({
        saludo:`Hola soy ${query.nombre} ${query.apellido}`,
    });
});


app.get('/saludo/:nombre', (req, res) => {
    const { params : { nombre } } = req
    res.json({
        nombre:nombre
    });
});

app.listen(3000,() => {
    console.log("servidor escuchando en htpp://localhost:3000");
})