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
    complemento: ''
    }]
}

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}