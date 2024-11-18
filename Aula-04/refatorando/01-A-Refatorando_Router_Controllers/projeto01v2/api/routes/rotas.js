const controller = require('../controllers/controllers.js')

app.get('/', controller.rotaRaiz);

app.get('/cursos/:cursoid', controller.cursoGetById);

