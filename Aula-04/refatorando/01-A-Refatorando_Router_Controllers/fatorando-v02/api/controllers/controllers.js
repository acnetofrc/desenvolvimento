const express = require('express')

module.exports = {
    rotaRaiz
}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json({Ola: 'Rota Raiz Encontrada!'})
}

