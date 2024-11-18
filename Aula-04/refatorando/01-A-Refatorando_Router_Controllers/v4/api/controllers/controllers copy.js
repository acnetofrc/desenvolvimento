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
    consultaCurso,
    cursoGetById
    

}

function rotaRaiz(req, res) {
    console.log("Rota Raiz Encontrada!!!");
    res.json({ ola: 'Seja bem vindo!' })
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


function cursoGetById(req, res) {
    const curso = req.params.cursoid;
    console.log("Parametro esperado: " + curso);
    res.json({ message: 'Rota consultar curso encontrada!'})
    console.log("Rota Consultar Curso Encontrada!");

    var leitura
    console.time(leitura)

    models.getByIdCurso(curso) 

    console.log('Curso lido.....')

    console.timeEnd(leitura)
    console.log('===================================================')

}


function xcursoGetById(req, res) {
    const curso = req.params.cursoid;
    console.log("Parametro esperado: " + curso);
    res.json({ message: 'Rota consultar curso encontrada!'})
    console.log("Rota Consultar Curso Encontrada!");

    var leitura
    console.time(leitura)
    models.getByIdCurso(curso, function(err, result){
//        console.log(result[0]);
        original = Object.values(JSON.parse(JSON.stringify(result))) 
        console.log("Curso foi lido { C O N T R O L L E R }"+" > \n" + original);
        if (err){
            throw err;
        } else {
            console.log('Curso lido.....')
        }
    });
    console.timeEnd(leitura)
    console.log('===================================================')

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
