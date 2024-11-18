const fs = require('fs')

module.exports = {
    getByIdCurso,
    getByIdLivro

}


// json chave x valor
const cursosInfo = [
    {'curso':'Css', 'info':'Curso de CSS'},
    {'curso':'Java', 'info':'Curso de Programação Java'},
    {'curso':'NodeJs', 'info':'Curso de NodeJS'},
    {'curso':'React', 'info':'Curso de React'}
]
 
//console.log(cursosInfo)
const livrosInfo = require('../../public/livros.json')
//console.log(livrosInfo)

function getByIdCurso (pcurso){
    const cursoI = cursosInfo.find(i => i.curso == pcurso)
    if (!cursoI) {
        console.error('Curso não encontrado! ')
    } else {
        console.log({cursoI})
    }

}
     
function getByIdLivro (plivro){
    const livroI = livrosInfo.find(i => i.id == plivro)
    if (!livroI) {
        console.error('Livro não encontrado! ')
    } else {
        console.log({livroI})
    }
}

