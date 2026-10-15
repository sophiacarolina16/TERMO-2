const entrada = require('fs');

//array
const sensores = [
  { codigo: "S01", tipo: "Temperatura", valor: 85.5, unidade: "°C", status: "Alerta" },
  { codigo: "S02", tipo: "Pressão", valor: 2.1, unidade: "bar", status: "Normal" },
  { codigo: "S03", tipo: "Vibração", valor: 4.8, unidade: "mm/s", status: "Alerta" },
  { codigo: "S04", tipo: "Nível", valor: 75.0, unidade: "%", status: "Normal" },
  { codigo: "S05", tipo: "Umidade", valor: 92.0, unidade: "%", status: "Alerta" }
];



const dadosJSON = JSON.stringify(sensores, null, 2);


entrada.writeFileSync('monitoramento.json', dadosJSON);

//mensagem
console.log('Dados de monitoramento salvos em monitoramento.json com sucesso!');

