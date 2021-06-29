//Traemos el paquete
const { Router } = require('express');
const { User } = require('../lib/Schema/User');

const { DataValidator } = require('../middlewares/DataValidator');
//Iniciando Router
const router = Router()

//creamos los end point
router
    .get("/", (req, res) => {
        res.send("Hola mundo con Express");
    })
    .get("/users", (req, res) => {
        res.json({
            msg: "Lista",
            body:data
        });
    })
    .get('/saludo', DataValidator("query", User), (req, res) =>{
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

