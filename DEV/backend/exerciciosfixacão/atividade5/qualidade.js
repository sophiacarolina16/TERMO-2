const entrada = require('readline-sync');

let pecasDefeituosas = []; // Começa vazio fora do laço
const qtd = entrada.questionInt("Quantas pecas com defeito foram encontradas? ");

for (let i = 0; i < qtd; i++) {
    let serie = entrada.question(`Digite o numero de serie da peca ${i + 1}: `);
    pecasDefeituosas.push(serie); // Empurra para dentro da lista
}

console.log("\n--- RELATORIO DE QUALIDADE ---");
console.log(`Total de pecas: ${pecasDefeituosas.length}`);
console.log(`Numeros de serie: ${pecasDefeituosas.join(" | ")}`);