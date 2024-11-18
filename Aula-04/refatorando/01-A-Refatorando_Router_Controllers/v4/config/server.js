const express = require('express')
const consign = require('consign')
//const rotas = require('../api/routes/rotas.js')
//const rotas = express.Router()

app = express();

//const porta = process.env.PORT || 3000
app.set('porta', 3002);
app.set('url', 'http://localhost:');

//app.use('/', rotas)

//app.get('*', (req, res) => {
//    res.send('Refatorando software!')
//})

//app.listen(porta,() => {
//    console.log('Rodando! na porta '+porta)
//})

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;


module.exports = app


