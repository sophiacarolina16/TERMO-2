const entrada = require('readline-sync');
const venda = require('./calculosVendas');

const nomeCli = entrada.question("Nome do cliente: ");
const precoProd = entrada.questionFloat("Preco do produto: ");
const qtdProd = entrada.questionInt("Quantidade: ");

const total = venda.calcularTotal(precoProd, qtdProd);
const cupom = venda.gerarCupom(nomeCli, total);

console.log("\n--- CUPOM FISCAL ---");
console.log(cupom);