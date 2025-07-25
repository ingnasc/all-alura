const estudante = {
    nome: 'Ingrid Nascimento',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

estudante.nome

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante]; //nao sabemos qual dado vamos receber, entao usa colchete 
}

//notacao de colchete aqui, conseguimos passar uma propriedade como um dado variavel
console.log(estudante['nome']); 
console.log(estudante['cpf']);


console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

