const models = require('../models/models.js')

module.exports = {
    rotaRaiz,
    cursoGetById

}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json({Ola: 'Rota Raiz Encontrada!'})
}

function cursoGetById(req, res){
    const curso = req.params.cursoid
    console.log("Parametro esperado: " + curso)
    res.json({Message: 'Rota Consultar Cursos Encontrada!'})

    let leitura
    console.time(leitura)

    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log("== Curso =============================")

}