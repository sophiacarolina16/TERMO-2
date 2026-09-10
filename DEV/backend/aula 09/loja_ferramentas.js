const fs = require('fs');

const produtos = [
    { id: 1, nome: "parafuso", qtd: 100 },
    { id: 2, nome: "porca", qtd: 250 },
    { id: 3, nome: "arruela", qtd: 100 }
];

function salvardados() {
    const dadostexto = JSON.stringify(produtos, null, 2);

    fs.writeFileSync('estoque.json', dadostexto);
    console.log("Dados salvos com sucesso no arquivo estoque.json");
}

function verestoquebaixo() {
    console.log("\n--- Produtos com estoque baixo (100 ou menos) ---");

    // Alterado para <= 100 para capturar parafuso e arruela
    const baixoestoque = produtos.filter(p => p.qtd <= 100); 
    console.log(baixoestoque);
}

// Execução das funções
salvardados();
verestoquebaixo();