const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//nota guarda o parametro em cada interação
notas.forEach(function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`a média é ${media}`);
