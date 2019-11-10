
var sensorLib = require('node-dht-sensor');
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')


sensorLib.initialize(11, 12);
var interval = setInterval(function () {
read();
}, 2000);
function read() {
var readout = sensorLib.read();
console.log('Temperature: ' + readout.temperature.toFixed(2) +'C, ' +'humidity: ' + readout.humidity.toFixed(2) + '%');

client.publish('sensores/temperaturedlt', 'Temperature: ' + readout.temperature.toFixed(2) +'C');
client.publish('sensores/humiditydlt', 'humidity: ' + readout.humidity.toFixed(2) + '%');

};

