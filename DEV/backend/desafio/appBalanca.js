const readline = require('readline-sync');
const { verificarPeso } = require('./funcoesBalanca');

while (true) {
  try {
    const entrada = readline.question('Digite o peso da peca em gramas (ou "sair" para encerrar): ');

    if (entrada.toLowerCase() === 'sair') {
      console.log('Encerrando o sistema da balança...');
      break;
    }

    const resultado = verificarPeso(entrada);
    console.log(resultado);
  } catch (error) {
    console.log(`ALERTA: ${error.message}`);
  }
}