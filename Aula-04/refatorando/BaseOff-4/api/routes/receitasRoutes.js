var controllerReceitas = require('../controllers/receitasControllers.js');

app.get('/receitas/receitasMenu', controllerReceitas.menuReceitasControllers);

//app.get('/receitas/receitasEsporteMenu', controllerNoticias.menuNoticiasEsporteControllers);

//app.get('/receitas/receitasEsporteFutebolMenu', controllerNoticias.menuNoticiasEsporteFutebolControllers);

