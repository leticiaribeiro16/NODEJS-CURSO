let http = require('http')

http.createServer(function(req, res){
    res.end('Hello, everyone!');
}).listen(9999)

console.log('Servidor rodando')