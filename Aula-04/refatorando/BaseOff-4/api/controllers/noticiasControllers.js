
module.exports = {
  
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers

}  

function menuNoticiasControllers(req, res) {
  res.render('noticias/frm_noticiasMenu.ejs', {title: 'Menu Notícias'});      
}

function menuNoticiasEsporteControllers(req, res) {
  res.render('noticias/frm_noticiasEsporteMenu.ejs', {title: 'Notícias de Esporte'});      
}

function menuNoticiasEsporteFutebolControllers(req, res) {
  res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {title: 'Notícias de Esporte Futebol'});      
}


