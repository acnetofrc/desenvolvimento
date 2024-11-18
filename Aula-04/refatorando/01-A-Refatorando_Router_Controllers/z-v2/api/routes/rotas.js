const controller = require('../controllers/controllers.js')

//let app = require('../../config/server.js')

app.get('/', controller.rotaRaiz);

app.get('/:cursoid', controller.consultaCurso);

