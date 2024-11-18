
var http = require('http');
var server = require('./config/server.js');

http.createServer(server).listen(server.get('porta'), function(){
  console.log('Servidor executando na porta: ' + server.get('url') + server.get('porta')+'\n');

});

