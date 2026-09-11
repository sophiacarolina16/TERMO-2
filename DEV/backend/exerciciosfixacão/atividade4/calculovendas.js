function calcularTotal(preco, qtd) {
    return preco * qtd;
}

function gerarCupom(nome, valor) {
    return `Cliente: ${nome} - Total a pagar: R$ ${valor.toFixed(2)}`;
}

module.exports = { 
    calcularTotal,
    gerarCupom 
};