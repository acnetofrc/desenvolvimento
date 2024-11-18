let pessoa = require('./modulos/pessoa.js');
let produto = require('./modulos/produto.js');
let calcular = require('./modulos/calcular.js');

const valorProduto = 20;

mineiro = pessoa()
prod = produto()

console.log(JSON.stringify(mineiro))
console.log("\nNome.......: " + mineiro.nome)
console.log("Profissão..: " + mineiro.profissao)
console.log("Altura/Peso: " + mineiro.altura + " - " + mineiro.peso)
console.log("=====================================================")

console.log(JSON.stringify(prod))
console.log("\nMarca......: " + prod.marca)
console.log("Origem.....: " + prod.origem)

console.log("=====================================================")
console.log("Valor Líquido Produto: " + valorProduto)
console.log("Valor Bruto Produto..: " + calcular.valor(valorProduto))

console.log("Valor com Desconto...: " + calcular.descontoDobro(valorProduto))

