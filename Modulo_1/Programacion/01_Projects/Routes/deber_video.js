//Paquete Express
const { Router } = require('express');
//Traemos el archivo json 
const data = require('../data.json');
//Iniciamos el router
const router = Router()

//Funcion para todo mayuscula nombre y apellido con map para no modificar el archivo original
var modificarDatos = data.map((persona) => {
    persona.first_name = persona.first_name.toUpperCase(),
    persona.last_name= persona.last_name.toUpperCase()
    return persona
})

//End points
router
    //server configurado en el path "/deber-video"
    .get("/deber-video", (req, res) => {
        res.send("Hola Este es el servidor del deber")
    })
    //1er end point path users
    .get("/deber-video/users", (req, res) => {
        //mostramos todos los registros de data.json
        res.json({
            msg: "Lista de Usuarios",
            body: modificarDatos
        })
    })
    // 2do end point "users-query"
    .get('/deber-video/users-query', (req, res) =>{                       
        const { query: { id } } = req
        //filtro para sacar los datos atravez del query "id"
        var filtro_datos =modificarDatos.filter((persona)=>persona.id==id)
        //validamos si el query de id no envia nada, si es asi mostraremos todos los registros de json
        if( id == null ){
            res.json({
                msg:"Lista De Json",
                body: modificarDatos
            })
        /*
        validamos que el query enviado se encuentre entre el rango de 1-10 porque solo tenemos 10 registros 
        si es asi imprimimos los el registro del query id enviado
        */
        }else if( id >= 1 && id <= 10 ){           
            res.json({
                msg:`Usuario con id = ${id}`,
                body: filtro_datos 
            })
        //caso contrario mostraremos un msg de error
        }else{
            res.json({
                msg:"Error No existen registros con id menores a 1 y mayores a 10"
            })
        }                                   
    })
    //3er end point "users-params"
    .get('/deber-video/users-params/:apellido', (req, res) =>{                       
        const { params: { apellido } } = req
        //filtro para sacar los datos atraves de apellido
        var correoFiltrado= modificarDatos.filter((persona)=> persona.last_name === apellido.toUpperCase())
        //Creamos una funcion atraves del filter "correoFiltrado" donde saquaremos solo email
        var dattosCorreo = correoFiltrado.map((persona)=>{
            persona.email = persona.email
            return persona.email
        })
        //validamos si el filter encontro o no un dato con el apellido enviado       
        if( correoFiltrado == false ){
            //false si en filter "correoFiltrado" no encontro registro con el parametro enviado
            res.json({
                msg: "Apellido no se encontro en el registro"
            })
        //caso contrario imprimiremos solo el correo del parametro enviado
        }else{
        res.json({
            msg: `Usuario con Apellido = ${apellido}`,
            body:  `Email: ${dattosCorreo} `
        })
    }   
    });

module.exports.RouterIndex = router