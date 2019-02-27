var http = require('http')
var app = require('./config/express');

http.createServer(app).listen(3000, function () {
    console.log('Servidor escutando na porta - http://localhost:' + this.address().port);
});

