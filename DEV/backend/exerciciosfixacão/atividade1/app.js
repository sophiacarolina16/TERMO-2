const entrada = require('readline-sync');
const moeda = require('./conversor'); // Lembre-se do ./

const valor = entrada.questionFloat("Digite o valor em Dolar (US$): ");
const resultado = moeda.converterDolarParaReal(valor);

console.log(`O valor convertido e: R$ ${resultado.toFixed(2)}`);