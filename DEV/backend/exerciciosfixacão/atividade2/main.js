<<<<<<< HEAD
// CORREÇÃO 2: Faltava o ./ no caminho do arquivo
const geo = require('./geometria'); 

const l = 10;
// CORREÇÃO 3: Chamar através do objeto 'geo' criado no require
=======
// CORREÇÃO 2: Faltava o ./ no caminho do arquivo
const geo = require('./geometria'); 

const l = 10;
// CORREÇÃO 3: Chamar através do objeto 'geo' criado no require
>>>>>>> 7fd17f07ad6c2b6d9d2161a127299d2ca3414491
console.log(`Area: ${geo.calcularAreaQuadrado(l)}`);