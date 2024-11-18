
module.exports = {
  
    menuClassificadosControllers

}  

function menuClassificadosControllers(req, res) {
  res.render('classificados/frm_classificadosMenu.ejs', {title: 'Menu Classificados'});      
}
