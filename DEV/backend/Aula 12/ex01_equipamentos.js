// usei IA para entender o que deveria ser feito, as anotacoes no arquivo são descricoes do que eu entendi e nao entendi que era pra fazer.

const entrada = require('fs');
// serve para interagir com outros arqivos e pastas

//fazer array
const equipamentos = [
  {
    codigo: 101,
    nome: "Parafusadeira",
    setor: "producao",
    operacional: true
  },
  {
    codigo: 102,
    nome: "parafusadeira",
    setor: "producao",
    operacional: true
  },
  {
    codigo: 103,
    nome: "parafusadeira",
    setor: "producao",
    operacional: false
  }
];

const dadosJSON = JSON.stringify(equipamentos, null, 2);
//converte as informacoes que estao no array pro JSON
//Não entendi o NULL e o 2


entrada.writeFileSync('equipamentos.json', dadosJSON);
//cria e salva um arquivo

//mensagem 
console.log('Equipamentos cadastrados com sucesso em equipamentos.json!');