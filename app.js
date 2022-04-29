const express = require ('express')
const path = require('path')
const app = express()
const router = require('./routers/main')

app.use(express.static(path.join(__dirname, 'public' )))

app.use(router)
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))


