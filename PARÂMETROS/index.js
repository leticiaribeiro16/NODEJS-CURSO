const express = require('express');
const app = express(); // cria uma copia inteira do framework na variavel app

//O QUE É O ERRO CANNOT GET?
// é porque nao tem nenhuma rota definida

app.get('/', function(req, res){
    res.send('hello world');
});

app.get('/hello/:nome', function(req, res){ //quando coloca : é um parametro
    res.send(req.params); //quando diz que tem o erro cannot get, é porque quando voce passa um parametro, vc n pode colocar só a primeira rota, tem que colocar a rota + paramtro
    //req recebe dados de uma requisição
});

app.get('/hello/:cargo/:nome', function(req, res){
    res.send('Ola ' + req.params.nome + 'Seu cargo eh: '+req.params.cargo);
});

app.listen(8081, function(){
    console.log('Servidor rodando')
});// é a ultima do codigo