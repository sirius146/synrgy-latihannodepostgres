const express = require('express')
const app = express()
const db = require('./queries')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/v1/authors',db.getAuthors)
app.post('/api/v1/authors',db.createAuthors)

app.listen(3000, ()=> console.log('server ready'))