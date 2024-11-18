const controller = require('../controllers/controllers.js')

app.get('/', controller.rotaRaiz);

app.get('/cursos/:cursoid', controller.cursoGetById);

//app.get('/livros/:livroid', controller.livrosGetAll);

app.get('/cep/:cepid', controller.cepGetById);
