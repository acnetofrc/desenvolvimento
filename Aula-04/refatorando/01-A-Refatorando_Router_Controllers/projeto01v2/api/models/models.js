module.exports = {
    getByIdCurso

}

const cursosInfo = [
    {'curso':'Css', 'info':'Curso de CSS'},
    {'curso':'Java', 'info':'Curso de Programação Java'},
    {'curso':'NodeJs', 'info':'Curso de NodeJS'},
    {'curso':'React', 'info':'Curso de React'}
]

function getByIdCurso(pcurso) {
    const cursoI = cursosInfo.find(i => i.curso == pcurso)
    if(!cursoI){
        console.error("Curso não encontrado!")
    } else {
        console.log({cursoI})
    }
}

