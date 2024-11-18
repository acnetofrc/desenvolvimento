const models = require('../models/models.js')
const fetch = require('node-fetch')
const axios = require('axios')
const server = require('../../config/server.js');
const fs = require('fs')

//const express = require('express')
 
// json chave x valor
const cursosInfo = [
    { 'curso': 'Css', 'info': 'Curso de CSS' },
    { 'curso': 'Java', 'info': 'Curso de Programação Java' },
    { 'curso': 'NodeJs', 'info': 'Curso de NodeJS' },
    { 'curso': 'React', 'info': 'Curso de React' }
]

//const livrosInfo = fs.readFileSync('livros.json', 'utf8');
//let livros = JSON.parse(livrosInfo);
//console.log("Controller lendo livros: "+livros)
 
module.exports = {
    rotaRaiz,
    cursoGetById,
//    livrosGetById,
    cepGetById

}

function rotaRaiz(req, res) {
    console.log("Rota Raiz Encontrada!!!");
    res.json({ Message: `Rota Raiz Encontrada!` })
}


function cursoGetById(req, res) {
    const curso = req.params.cursoid;
    console.log("Parametro esperado: " + curso);
    res.json({ message: 'Rota consultar curso encontrada!' })
    //    console.log("Rota Consultar Curso Encontrada!");

    var leitura
    console.time(leitura)

    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log('===================================================')

}

function livrosGetAll(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);

    //    axios.get(".././public/livros.json")

    //    fetch(".././public/livros.json")
    console.log('Consultando livros....' + livro)
    /*    
        fetch(`./livros.json`, {
            method: 'GET'
        })
    */
    //    axios.get("livros.json")
    /*
    fetch('https://api.github.com/users/github')
        .then(res => res.json())
        .then(json => console.log(json));
    */

    models.getByIdLivro(livro)
 
 
    /*
        fetch(`livros.js`, {method: 'GET'})
            .then((response) => response.json())
            .then(response => console.log(response))
            .catch(function (error) {
                console.log("Erro na requisição");
            })
            .finally(function () {
                console.log("Sempre retorna");
            });
    */

}



function cepGetById(req, res) {
    const cep = req.params.cepid;
    console.log("Parametro esperado: " + cep);
    console.log('Consultando cep....' + cep)

    const url = `https://viacep.com.br/ws/`+cep+`/json/`;
    console.log(url)
  
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({message:dados})            
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição");
        })
        .finally(function () {
            console.log("Final consulta de cep");
        });

}




