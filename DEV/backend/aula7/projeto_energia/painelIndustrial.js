const entrada = require('readline-sync');
const projeto_energia = require('./calculoEnergia');

console.log("=== PAINEL INDUSTRIAL ===")
const maquina = entrada.question("nome da maquina: ");
const potencia = entrada.questionInt("potencia em Watts: ")
const horas = entrada.questionInt(" Horas de uso no mes: ")
const precoWatts = entrada.questionFloat(" preco do Watts: ")

const contaConsumo = projeto_energia.calcularKwh(potencia, horas);
const contaCusto = projeto_energia.calcularCusto(contaConsumo, precoWatts);
const contaClassificacao = projeto_energia.classificarConsumo(contaConsumo);


console.log("\n--- RELATORIO DE POSTAGEM ---");
console.log(`maquina: ${maquina}`);
console.log(`Consumo: ${contaConsumo}`);
console.log(`Custo: R$ ${contaCusto.toFixed(2)}`);
console.log(`Classificacao: R$ ${contaClassificacao}`);
console.log(" -".repeat(25));

