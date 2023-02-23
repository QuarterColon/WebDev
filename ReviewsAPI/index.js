import app from "./server.js"
import mongodb from "mongodb"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.tdcdndh.mongodb.net/?retryWrites=true&w=majority` 
const hostname = `127.0.0.1`
const port = 8000



MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    app.listen(port,hostname, () => {
        console.log(`listening on port at http://${hostname}:${port}/`)
    })
})