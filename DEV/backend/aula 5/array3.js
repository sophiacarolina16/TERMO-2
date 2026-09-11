const entrada = require("readline-sync");

const notas = [];

const quantidades = entrada.questionInt(
    "Quantas notas deseja cadastrar?"
);

for (let i = 0; i< quantidades; i++) {
    let nota = entrada.questionFloat (
        `Digite a nota ${i+1}:`
    );

    notas.push(nota);
}

console.log("\nNotas cadastradas:");
console.log(notas);

console.log(`notas`);

console.log(`Quantidades de notas: ${notas.length}`);
