const express = require('express')
const path = require('path')
const rotas = express.Router()

const porta = process.env.PORT = 3000

const app = express()

app.use('/', rotas)

rotas.get('/', (req, res) => {
    res.send('Refatorando software!!!')
})

rotas.get('/ola', (req, res) => {
    res.json({ola:'Diga Olá a todos!'})
})

rotas.get('/compras', (req, res) => {
    res.json({message:'Compre a vontade!'})
})

rotas.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(porta,() => {
    console.log('Servidor rodando na porta ' + porta)
})
