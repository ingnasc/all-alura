const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5575999999999', '5575999999998'],
  endereco: [{
    rua: 'Rua Joao Maria',
    numero: '45A',
    complemento: 'APTO 54'
    }]
}

estudante.endereco.push({
    rua: 'Rua Clotilde',
    numero: '58',
    complemento: '' //ou null que tambem é false
})

console.log(estudante.endereco);
console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);
