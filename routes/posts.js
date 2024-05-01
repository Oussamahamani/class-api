import express from 'express'


import { index,getOnePost } from '../controllers/postsController.js'

const router = express.Router()
 

router.get("/",index)

router.get("/:id",getOnePost)

export default router