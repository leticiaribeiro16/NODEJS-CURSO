const express = require('express');
const app = express(); // cria uma copia inteira do framework na variavel app

//O QUE É O ERRO CANNOT GET?
// é porque nao tem nenhuma rota definida

app.get('/', function(req, res){
    res.send('hello world')
});

app.get('/sobre', function(req, res){
    res.send('sobre o hello world')
});

app.listen(8081, function(){
    console.log('Servidor rodando')
});// é a ultima do codigo