const express = require('express')
const rotas = express.Router()

rotas.get('/', (req, res) => {
    res.json({Olá: 'Rota raiz encontrada' })
})

module.exports = rotas

