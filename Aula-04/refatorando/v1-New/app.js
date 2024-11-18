const express = require('express')
const path = require('path')
const rotas = express.Router()
  
const app = express()

const porta = process.env.PORT = 3000
// configurando a porta para http
//app.set('porta', 3000);

app.use('/', rotas)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
  
// diretorio estático é o public
app.use('/static', express.static(__dirname + 'public'));
//app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('js'));
app.use(express.static('imagens'));
 
   
rotas.get('/', (req, res) => {
    res.send('Refatorando software!!!')
})

rotas.get('/ola', (req, res) => {
    res.json({ola:'Diga Olá a todos!'})
})

rotas.get('/compras', (req, res) => {
    res.json({message:'Compre a vontade!'})
})
  
rotas.get('/home', (req, res) => {
//    res.sendFile(path.join(__dirname + '/index.html'))
    res.render('parcial/index.ejs', {title: "Fatorando!...",
        mensagem: 'Iniciando com NodeJS e Express - EJS',
        autor: '5º ADS - Programação Script'
});

})

 
app.listen(porta,() => {
    console.log('Servidor rodando na porta ' + porta)
})

 