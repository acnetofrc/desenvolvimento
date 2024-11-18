const express = require('express')
const path = require('path')

const rotas = express.Router()

//const rotas = require('./rotas.js')

const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('/', (req, res) => {
    res.send('Refatorando software!')
})

rotas.get('/ola', (req, res) => {
    res.json({ola:'Seja bem vindo!'})
})

rotas.get('/principal', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))

//    res.render('./index.html')
/*
    res.render('estagios/cadastros/frm_cadCidades.ejs', 
    {title: 'Cidades',
    nomeUsuario: global.nomeUsuario,
    codigoUsuario: global.codigoUsuario,
      cidades: result});
*/
})

app.listen(porta,() => {
    console.log('Rodando! na porta '+porta)
})

