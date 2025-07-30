const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor)); //para array ou string
    //return lista.find((estudante) => estudante[chave] === valor);
    //apenas a primeira ocorrencia encontrada
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '5193301028');
console.log(telefoneEncontrado);