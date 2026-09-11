// molde
function criarAluno(nome, idade, matricula) {
    return {
        nome: nome,
        idade: idade,
        matricula: matricula
    };
}

// dados
const aluno1 = criarAluno("Brunão", 16, "2026-ABC");
const aluno2 = criarAluno("Celsão", 16, "2026-EFG");

// teste
console.log(aluno1);
console.log(aluno2);