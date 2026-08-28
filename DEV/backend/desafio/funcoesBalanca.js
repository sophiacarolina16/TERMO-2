function verificarPeso(leitura) {
  const peso = Number(leitura);

  if (isNaN(peso)) {
    throw new Error('Entrada inválida! Digite apenas números.');
  }

  if (peso < 100 || peso > 500) {
    throw new Error('Peso fora do padrão! Peça descartada.');
  }

  return `Peça aprovada com ${peso}g.`;
}

module.exports = { verificarPeso };