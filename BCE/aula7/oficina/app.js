const entrada = require('readline-sync');

//importar o modulo funcoesOficina

const oficina = require('./funcoesOficina');

console.log("=== SISTEMA DE GESTAO DE OFICINA ===");

const peca = entrada.questionFloat("Preco da peca: R$ ");
const horas = entrada.questionFloat("Horas de servico: ");
const tempoUso = entrada.questionInt("Meses desde o ultimo conserto: ");


const statusGarantia = oficina.verificarGarantia(tempoUso);
const total = oficina.calcularOrcamento(peca, horas);
const totalDesconto = oficina.calcularDesconto(total);

//Relatorio Final
console.log("\n---RELATORIO DE SERVICO---");
console.log(`Orcamento: R$ ${total.toFixed(2)}`);
console.log(`Orcamento com desconto(5%): R$ ${totalDesconto.toFixed(2)}`);
console.log(`Status da Garantia ${statusGarantia}`);
console.log("-".repeat(30));
