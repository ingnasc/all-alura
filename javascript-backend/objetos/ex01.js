// 1 - Crie um arquivo js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const objeto = {
    titulo: 'Gente Ansiosa',
    autor: 'Fedrick Backman',
    anoPublicacao: 2019,
    genero: 'Ficção Contemporânea'
};

console.log (`
    Título: ${objeto.titulo},
    Autor: ${objeto.autor},
    Ano de Publicação: ${objeto.anoPublicacao},
    Gênero: ${objeto.genero}.
`);
