const express = require('express')
const rotas = express.Router()

// json chave x valor
const cursosInfo = [
    {'curso':'Css', 'info':'Curso de CSS'},
    {'curso':'Java', 'info':'Curso de Programação Java'},
    {'curso':'NodeJs', 'info':'Curso de NodeJS'},
    {'curso':'React', 'info':'Curso de React'}
]

rotas.get('/', (req, res) => {
    res.json({ola:'Seja bem vindo!'})
})

rotas.get('/:cursoid', (req, res)=>{
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i=>i.curso == curso)
    if(!cursoI) {
        res.status(404).json(
            {erro:'Curso não encontrado! ', cursoPesquisado:curso}
        )
    } else {
        res.status(200).json(cursoI)
    }
})

module.exports = rotas
