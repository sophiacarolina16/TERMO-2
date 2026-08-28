const entrada = require('readline-sync');
const projeto_energia = require('./calculoEnergia');

console.log("=== PAINEL INDUSTRIAL ===");
const maquina = entrada.question("Nome da maquina: ");
const potencia = entrada.questionInt("Potencia em Watts: ");
const horas = entrada.questionInt("Horas de uso no mes: ");
const precoKwh = entrada.questionFloat("Preco do kWh (em R$): "); 

const contaConsumo = projeto_energia.calcularKwh(potencia, horas);
const contaCusto = projeto_energia.calcularCusto(contaConsumo, precoKwh);
const contaClassificacao = projeto_energia.classificarConsumo(contaConsumo);

console.log("\n--- RELATORIO DE CONSUMO ---");
console.log(`Maquina: ${maquina}`);
console.log(`Consumo: ${contaConsumo} kWh`);
console.log(`Custo: R$ ${contaCusto.toFixed(2)}`);
console.log(`Classificacao: ${contaClassificacao}`);
console.log("-".repeat(25));