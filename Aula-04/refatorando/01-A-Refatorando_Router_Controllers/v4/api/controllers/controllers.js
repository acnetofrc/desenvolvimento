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

 
module.exports = {
    rotaRaiz,
    cursoGetById,
    livrosGetById,
    cepGetById,
    sabespGetById,
    moedaGetById,
    githubGetById

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

function livrosGetById(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);
    res.json({ message: 'Rota consultar livros encontrada!' })

    var leitura
    console.time(leitura)

    models.getByIdLivro(livro)

    console.timeEnd(leitura)
    console.log('===================================================')
 
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

/*
    informar data no formato
    YYYY-MM-DD
*/
function sabespGetById(req, res) {
    const sabesp = req.params.dataid;
    console.log("Parametro esperado: " + sabesp);
    console.log('Consultando Manancial....' + sabesp)

    const url = `https://sabesp-api.herokuapp.com/` + sabesp;
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


/*
    informar o número de registros - numero inteiro
*/
function moedaGetById(req, res) {
    const regs = req.params.moedaid;
    console.log("Parametro esperado: " + regs);
    console.log('Consultando Manancial....' + regs)

    const url = `https://economia.awesomeapi.com.br/json/USD-BRL/` + regs;
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


/*
    informar o número de registros - numero inteiro
*/
function githubGetById(req, res) {
    const git = req.params.perfilid;
    console.log("Parametro esperado: " + git);
    console.log('Consultando Github....' + git)

    const url = `https://api.github.com/users/` + git;
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



