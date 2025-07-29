const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5575999999999', '5575999999998'],
  media: 7.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false
  }
}

console.log(estudante.estaAprovado(7));
