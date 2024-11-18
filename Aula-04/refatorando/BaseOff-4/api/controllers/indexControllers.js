var cnf_ambiente = require('../../config/config.js');

console.log(cnf_ambiente);

module.exports = {
  
    indexControllers,
    abasFormControllers,
    parcialFormControllers   

}  

function indexControllers(req, res) {
  res.render('inicio/index.ejs', {title: 'Projeto Node'});      
//  res.render('parcial/menu.ejs', {title: 'Projeto Node'});      

}

function abasFormControllers(req, res) {
  res.render('inicio/frm_abas.ejs', {title: 'Formulário Abas'});      

}

/*
function parcialFormControllers(req, res) {
  res.render('parcial/frm_modular.ejs', {title: 'Formulário Modular'});      
}
*/

function parcialFormControllers(req, res) {
  if(cnf_ambiente.empresa.ambiente = "desenvolvimento"){
    nomeEmpresa = cnf_ambiente.desenvolvimento.nomeEmpresa;
    corEmpresa = cnf_ambiente.desenvolvimento.corFormulario;    
    logoEmpresa = cnf_ambiente.desenvolvimento.nomeLogo;
  }else{
    nomeEmpresa = cnf_ambiente.producao.corFormulario;
    corEmpresa = cnf_ambiente.producao.corFormulario;
    logoEmpresa = cnf_ambiente.producao.nomeLogo;
  }

  console.log(corEmpresa);
  console.log(logoEmpresa);

  cnf_ambiente.empresa.nomeUsuario = "Mario";


  res.render('parcial/frm_modular.ejs', {
    title: 'Formulário Modular',
    usuario: cnf_ambiente.empresa.nomeUsuario,
    empresa: nomeEmpresa,
    rota: req.originalUrl,
    cor: corEmpresa,
    logotipo: logoEmpresa
  });      
}
