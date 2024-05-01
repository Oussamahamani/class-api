import express from 'express'
import 'dotenv/config'

import gradeRoutes from './routes/grades.js'
import postRoutes from "./routes/posts.js"
const app = express()

const PORT = process.env.PORT || 8081;

app.use(express.json())

app.use("/posts",postRoutes)

app.use('/grades', gradeRoutes)

app.get('/', (req, res) => {
    res.send('do not say hello')
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})