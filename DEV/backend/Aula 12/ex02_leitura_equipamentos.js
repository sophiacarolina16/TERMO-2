const entrada = require('fs');

const caminhoArquivo = 'equipamentos.json';


if (!entrada.existsSync(caminhoArquivo)) {
  console.error(`Erro: O arquivo "${caminhoArquivo}" não foi encontrado.`);
  console.log('Execute o Exercício 1 primeiro para gerar o arquivo!');
  process.exit(1);
}
//esse fs.existssync vai verificar se o arquivo existe dando true, false caso nao exista



const dadosTexto = entrada.readFileSync(caminhoArquivo, 'utf-8');
//ele vai ler o arquivo


const equipamentos = JSON.parse(dadosTexto);
//vai converter JSON em array 


console.log('--- RELATÓRIO DE EQUIPAMENTOS ---\n');


equipamentos.forEach((eq) => {
//vai percorrer o array todo(forEach)
// nao entendi esse "eq"

  const status = eq.operacional ? 'OPERACIONAL' : 'PARADA';

  console.log(`Código: ${eq.codigo}`);
  console.log(`Equipamento: ${eq.nome}`);
  console.log(`Setor: ${eq.setor}`);
  console.log(`Status: ${status}`);
  console.log('---------------------------')
});