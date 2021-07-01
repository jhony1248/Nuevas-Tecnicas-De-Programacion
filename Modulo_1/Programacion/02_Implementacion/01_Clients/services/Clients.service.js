const {MongoConnection} = require('../lib/Mongo');

//collection
const COLLECTION = "clients"
const findUsers = () => 
    new Promise(async (resolve, reject) => {
    try {
    //Inicializa mongoclient para retornar la
    //configuracion de la db
    const DB = await MongoConnection();
    //obtenemos la collection
    const clients = DB.collection(COLLECTION)
    const clientList = await clients.find({}).toArray()
    resolve(clientList);      
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    findUsers,
}