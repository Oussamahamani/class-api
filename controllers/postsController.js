import db from '../db/conn.js'

import { Collection, ObjectId } from 'mongodb'



async function index (req,res){

    res.send("hello")
}

async function getOnePost(req,res){
    res.send("one post")
}


export {index,getOnePost}