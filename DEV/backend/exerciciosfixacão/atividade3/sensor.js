<<<<<<< HEAD
function checarTemperatura(valor) {
    if (valor > 40) {
        return "ALERTA: Caldeira Superaquecida ⚠️";
    }else {
    return "Temperatura Normal ✅";
    }
}

function checarUmidade(valor) {
    if (valor < 20) {
        return "ALERTA: Ar muito seco ⚠️";
    }
    return "Umidade Normal ✅";
}

module.exports = { 
    checarTemperatura,
    checarUmidade 
=======
function checarTemperatura(valor) {
    if (valor > 40) {
        return "ALERTA: Caldeira Superaquecida ⚠️";
    }else {
    return "Temperatura Normal ✅";
    }
}

function checarUmidade(valor) {
    if (valor < 20) {
        return "ALERTA: Ar muito seco ⚠️";
    }
    return "Umidade Normal ✅";
}

module.exports = { 
    checarTemperatura,
    checarUmidade 
>>>>>>> 7fd17f07ad6c2b6d9d2161a127299d2ca3414491
};