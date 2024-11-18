const fs = require('fs');
const ini = require('ini');

const cnf_ambiente = ini.parse(fs.readFileSync('./config/config.ini', 'utf-8'));
const empresa = cnf_ambiente.empresa;

const producao = cnf_ambiente.producao;
const desenvolvimento = cnf_ambiente.desenvolvimento;

console.log(empresa);
console.log(cnf_ambiente.empresa.nomeUsuario);

console.log("----------------");

console.log(producao);
console.log("----------------");

console.log(desenvolvimento);
console.log("----------------");

module.exports = cnf_ambiente;
