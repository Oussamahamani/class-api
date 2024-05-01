import { MongoClient } from 'mongodb'

const connectionString = process.env.ATLAS_URI 

const client = new MongoClient(connectionString)

let conn;
let db ={}
try {
    console.log(process.env.ATLAS_URI,'link')
   conn = await client.connect()
   console.log('Connected to MongoDB')
} catch(err) {
    console.log(err)
}

 db = conn.db("sample_training")

export default db