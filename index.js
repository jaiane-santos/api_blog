const express = require('express')
const app = express()
const postRouter = require('./app/routers/postRouter')

app.use(express.json());

app.use('/posts', postRouter)

app.listen(3005, () => console.log("servidor rodando"))