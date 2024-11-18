
module.exports = {
  
    menuReceitasControllers
//    menuNoticiasEsporteControllers,
//    menuNoticiasEsporteFutebolControllers

}  

function menuReceitasControllers(req, res) {
  res.render('receitas/frm_receitasMenu.ejs', {title: 'Menu Receitas'});      
}

/*

function menuNoticiasEsporteControllers(req, res) {
  res.render('noticias/frm_noticiasEsporteMenu.ejs', {title: 'Notícias de Esporte'});      
}

function menuNoticiasEsporteFutebolControllers(req, res) {
  res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {title: 'Notícias de Esporte Futebol'});      
}

*/


