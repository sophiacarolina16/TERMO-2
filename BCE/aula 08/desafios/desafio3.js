const entrada = require('readline-sync');

console.log("===CALCULADORA DE AREA DE TERRENOS===");

const nome = entrada.question("digite seu nome: ");
const Terrenos = entrada.questionInt("Quantos terrenos quer calcular? ");


const areas = [];


function calcularAreaTerreno(numeroTerreno) {
  const largura = entrada.questionInt(`digite a largura do terreno ${numeroTerreno}: `);
  const comprimento = entrada.questionInt(`digite o comprimento do terreno ${numeroTerreno}: `);
  
  const area = largura * comprimento;
  console.log(`A area do terreno ${numeroTerreno} é: ${area} m²\n`);
  
  return area;
}


for (let i = 1; i <= Terrenos; i++) {
  const areaCalculada = calcularAreaTerreno(i);
  areas.push(areaCalculada); 
}


console.log(`\nOlá, ${nome}! Os resultados totais são:`);
for (let i = 0; i < areas.length; i++) {
  console.log(`Terreno ${i + 1} tem area de ${areas[i]} m²`);
}