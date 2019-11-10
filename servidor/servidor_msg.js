/*var http = require("http");
const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('C:/Users/t.monteiro.pessoa/Downloads/Mqtt/mqttsubscriber.html');
});*/

//var fs = require('fs');
var http = require('http');
var express = require('express')
var app = express()
//var mqtt    = require('mqtt');
//var index = require('./index.html')
//var client  = mqtt.connect('mqtt://broker.hivemq.com');

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/example.html')
})

//req.params.nome
app.use(express.static(__dirname));

app.listen(8080, (err)=>{
    if(err){
        console.log('erro ao conectar')
    }else{
        console.log('escutando porta 8080')
    }
})

/*
client.subscribe('senores/beacondlt');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);

}).listen(8080);

console.log('listening on port 8080...');

*/