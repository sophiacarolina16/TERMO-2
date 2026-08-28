const entrada = require('readline-sync');
console.log("=== Catalogo de Filmes ===");

const nome = entrada.question("digite seu nome:");

let cinema = [
    { titulo: "Spider-Man", classificacao: 12 },
    { titulo: "Matrix", classificacao: 16 },
    { titulo: "Deadpool", classificacao: 18 }
]

let idade = entrada.questionInt("Digite sua idade:");
for (let i = 0; i < cinema.length; i++) {
    if (idade >= cinema[i].classificacao) {
        console.log(`Você pode assistir a: ${cinema[i].titulo}`);
    }else {
        console.log(`Voce nao pode assistir a ${cinema[i].titulo}`)
    }
}
