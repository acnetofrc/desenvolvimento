var controllerIndex = require('../controllers/indexControllers.js');

app.get('/', controllerIndex.indexControllers);

app.get('/inicio/formAbas', controllerIndex.abasFormControllers);

app.get('/parcial/formParcial', controllerIndex.parcialFormControllers);

