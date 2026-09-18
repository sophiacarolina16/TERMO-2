<<<<<<< HEAD
const entrada = require('readline-sync');
const venda = require('./calculosVendas');

const nomeCli = entrada.question("Nome do cliente: ");
const precoProd = entrada.questionFloat("Preco do produto: ");
const qtdProd = entrada.questionInt("Quantidade: ");

const total = venda.calcularTotal(precoProd, qtdProd);
const cupom = venda.gerarCupom(nomeCli, total);

console.log("\n--- CUPOM FISCAL ---");
=======
const entrada = require('readline-sync');
const venda = require('./calculosVendas');

const nomeCli = entrada.question("Nome do cliente: ");
const precoProd = entrada.questionFloat("Preco do produto: ");
const qtdProd = entrada.questionInt("Quantidade: ");

const total = venda.calcularTotal(precoProd, qtdProd);
const cupom = venda.gerarCupom(nomeCli, total);

console.log("\n--- CUPOM FISCAL ---");
>>>>>>> 7fd17f07ad6c2b6d9d2161a127299d2ca3414491
console.log(cupom);