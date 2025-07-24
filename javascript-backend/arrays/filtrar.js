const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

//retorna o resultado da avaliacao, true or false
const reprovados = alunos.filter((_, indice) => {
    return medias [indice] < 7;
})

console.log(reprovados);
