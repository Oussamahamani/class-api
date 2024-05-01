import db from '../db/conn.js'

import { ObjectId } from 'mongodb'

const index = async(req,res)=>{
    let collection = await db.collection("grades")
    let result = await collection.find().limit(5).toArray()
    if (!result) res.send('Not found').status(404)
    else res.send(result).status(200)
}


export {index}