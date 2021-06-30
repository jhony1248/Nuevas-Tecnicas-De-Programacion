const { MongoClient }= require('mongodb');

const DB_NAME = ""
const URL = "mongodb+srv://jhony124:<1234>@ntp.4zkqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MongoConnection = ()=> new Promise(async(resolve, reject) =>{
    try {
        let client = MongoClient(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await client.connect()
        resolve(client.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
})