<<<<<<< HEAD
const entrada = require('readline-sync');
const moeda = require('./conversor'); // Lembre-se do ./

const valor = entrada.questionFloat("Digite o valor em Dolar (US$): ");
const resultado = moeda.converterDolarParaReal(valor);

=======
const entrada = require('readline-sync');
const moeda = require('./conversor'); // Lembre-se do ./

const valor = entrada.questionFloat("Digite o valor em Dolar (US$): ");
const resultado = moeda.converterDolarParaReal(valor);

>>>>>>> 7fd17f07ad6c2b6d9d2161a127299d2ca3414491
console.log(`O valor convertido e: R$ ${resultado.toFixed(2)}`);