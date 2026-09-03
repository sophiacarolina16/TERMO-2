const fs = require('fs');
const maquinas = [
    { "id": 1, "nome": "Torno CNC", "horasUso": 1200 },
    { "id": 2, "nome": "Fresadora", "horasUso": 800 },
    { "id": 3, "nome": "Prensa Hidraulica", "horasUso": 1500 },
    { "id": 4, "nome": "Corte a Laser", "horasUso": 500 }
]

function salvarDados() {
    const dadosTexto = JSON.stringify(maquinas,null,2);
    fs.writeFileSync('maquinas_urgente.json',dadosTexto),
    console.log('Dados salvos com sucesso!');
}

function horasDeUso() {
    console.log("\nmaquinas com mais de 1000 horas de uso");
    const maisHorasDeUso = maquinas.filter(p => p.horasUso > 1000);
    console.log(maisHorasDeUso);
}

salvarDados();
horasDeUso();
