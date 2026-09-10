const fs = require('fs');
const entrada = require('readline-sync');

console.log("--- Sistema de Consulta de Estoque ---");

try {
    const dadostexto = fs.readFileSync('estoque.json', 'utf-8');
    const produtos = JSON.parse(dadostexto);

    const termobusca = entrada.question("Digite o nome do produto para buscar: ");

    // .trim() remove espaços acidentais antes ou depois da palavra
    const resultado = produtos.find(p => p.nome.toLowerCase().trim() === termobusca.toLowerCase().trim());

    if (resultado) {
        console.log("\nPRODUTO ENCONTRADO:");
        console.log(`ID: ${resultado.id}`);
        console.log(`Nome: ${resultado.nome}`);
        console.log(`Quantidade em estoque: ${resultado.qtd}`);
    } else {
        console.log("\nSinto muito. Produto não cadastrado no sistema.");
    }

} catch (erro) {
    console.log("Erro ao acessar o banco de dados: " + erro.message);
}