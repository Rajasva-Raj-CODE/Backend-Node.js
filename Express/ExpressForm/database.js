const mongodb = require("mongodb").MongoClient

let connectDB = async () =>{
    let client = await mongodb.connect("mongodb://127.0.0.1:27017")
    let database = client.db("userDB")
    let collection = await database.createCollection("userInfo")
    return collection
}