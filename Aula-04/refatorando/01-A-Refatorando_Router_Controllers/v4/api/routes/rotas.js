const controller = require('../controllers/controllers.js')

app.get('/', controller.rotaRaiz);

app.get('/cursos/:cursoid', controller.cursoGetById);

app.get('/livros/:livroid', controller.livrosGetById);

app.get('/cep/:cepid', controller.cepGetById);

app.get('/sabesp/:dataid', controller.sabespGetById)

app.get('/sabesp/:dataid', controller.sabespGetById)

app.get('/moeda/:moedaid', controller.moedaGetById)

app.get('/github/:perfilid', controller.githubGetById)



