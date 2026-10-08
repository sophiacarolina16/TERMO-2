const entrada = require('fs');

const caminhoArquivo = 'equipamentos.json';


if (!entrada.existsSync(caminhoArquivo)) {
  console.error(`Erro: O arquivo "${caminhoArquivo}" não foi encontrado.`);
  process.exit(1);
}
//ele vai checar se o arquivo existe, se nao existir ele da erro



const conteudo = entrada.readFileSync(caminhoArquivo, 'utf-8');
const equipamentos = JSON.parse(conteudo);

// le e converte em dados


let totalParados = 0;
//conta quantos estao parados


console.log('=== EQUIPAMENTOS PARADOS ===');


equipamentos.forEach((eq) => {
//percorre o array todo(ainda nao entendi esse "eq", porque pelas minhas pesquisas passadas só o ja forEach serve para listar tudo que ta dentro do array)

  if (!eq.operacional) {
    console.log(`${eq.nome} - ${eq.setor}`);
    totalParados++;
  }
});
//nao entendi essa parte

//mensagem final
console.log(`Total de equipamentos parados: ${totalParados}`);