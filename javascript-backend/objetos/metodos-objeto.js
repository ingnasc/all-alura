const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5575999999999', '5575999999998'],
//   enderecos: [{
//     rua: 'Rua Joao Maria',
//     numero: '45A',
//     complemento: 'APTO 54'
//     }, 
//     {
//     rua: 'Rua Clotilde',
//     numero: '3',
//     complemento: null
//     }]
}

const chavesObjeto = Object.keys(estudante); //array de chaves
console.log(chavesObjeto);

if (!chavesObjeto.includes ('enderecos')) {
    console.error('é necessário ter um endereço cadastrado');
    
}
