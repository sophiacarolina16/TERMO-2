<<<<<<< HEAD
const entrada = require('readline-sync');
const sensor = require('./sensor');

const t = entrada.questionFloat("Temperatura atual: ");
const u = entrada.questionFloat("Umidade atual: ");

console.log(sensor.checarTemperatura(t));
=======
const entrada = require('readline-sync');
const sensor = require('./sensor');

const t = entrada.questionFloat("Temperatura atual: ");
const u = entrada.questionFloat("Umidade atual: ");

console.log(sensor.checarTemperatura(t));
>>>>>>> 7fd17f07ad6c2b6d9d2161a127299d2ca3414491
console.log(sensor.checarUmidade(u));