//Traemos el paquete
const { Router } = require('express');

//Iniciando Router
const router = Router()

//creamos los end point
router
    .get("/", (req, res) => {
        res.send("Hola mundo con express3s")
    })
    .get("/users", (req, res) => {
        res,json
    })
    .get('/saludo', (req, res) =>{
        const {query} =req;
        res.json({
            saludo:`Hola soy ${query.nombre} ${query.apellido}`,
        });
    })
    .get('/saludo/:nombre', (req, res) => {
        const { params : { nombre } } = req
        res.json({
            nombre:nombre
        });
    });

module.exports.RouterIndex = router
//module = {
//    exports:{
//        RouterIndex:router
//    }
//}