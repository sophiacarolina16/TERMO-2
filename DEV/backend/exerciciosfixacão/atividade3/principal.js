const entrada = require('readline-sync');
const sensor = require('./sensor');

const t = entrada.questionFloat("Temperatura atual: ");
const u = entrada.questionFloat("Umidade atual: ");

console.log(sensor.checarTemperatura(t));
console.log(sensor.checarUmidade(u));