const models = require('../models/models.js')
const express = require('express')

// json chave x valor
const cursosInfo = [
    {'curso':'Css', 'info':'Curso de CSS'},
    {'curso':'Java', 'info':'Curso de Programação Java'},
    {'curso':'NodeJs', 'info':'Curso de NodeJS'},
    {'curso':'React', 'info':'Curso de React'}
]


module.exports = {
    rotaRaiz,
    consultaCurso

}

function rotaRaiz(req, res) {
    console.log("Rota Raiz Encontrada!!!");
    res.json({Message: `Rota Raiz Encontrada!` })
//    return res.send({Message: `Rota Raiz Encontrada!` })
}

function consultaCurso(req, res) {
    const curso = req.params.cursoid;
    console.log("Parametro esperado: " + curso);

    console.log("Rota Consultar Cursos Encontrada!");

    const cursoI = cursosInfo.find(i => i.curso == curso)
    if (!cursoI) {
        res.status(404).json(
            { erro: 'Curso não encontrado! ', cursoPesquisado: curso }
        )
    } else {
        res.status(200).json(cursoI)
    }

}



function zzconsultaCurso(req, res) {
    var id = req.params.cursoid;
    console.log("Parametro esperado: " + id);

    console.log("Rota Consultar Cursos Encontrada!");
    models.getCurso(id, function (err, resultado) {
        console.log("Cursos {M O D E L}", resultado);
        const cursoI = models.cursosInfo.find(i => i.curso == curso)
        if (!cursoI) {
            res.status(404).json(
                { erro: 'Curso não encontrado! ', cursoPesquisado: curso }
            )
        } else {
            res.status(200).json(cursoI)
        }

    })

}
