const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5575999999999', '5575999999998'],
  enderecos: [{
    rua: 'Rua Joao Maria',
    numero: '45A',
    complemento: 'APTO 54'
    }, 
    {
    rua: 'Rua Clotilde',
    numero: '3',
    complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones) //spread operator, operador de espalhamento, tirar dados de um objeto e formar novos objetos a partir disso 

const dadosEnvio = {
    destinatario: estudante.nome,
    // endereco: estudante.enderecos[0]
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);
