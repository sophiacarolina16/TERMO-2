// CORREÇÃO 2: Faltava o ./ no caminho do arquivo
const geo = require('./geometria'); 

const l = 10;
// CORREÇÃO 3: Chamar através do objeto 'geo' criado no require
console.log(`Area: ${geo.calcularAreaQuadrado(l)}`);