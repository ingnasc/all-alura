// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const meuArray = [20, 54, 65, 964, 98];

let total = 0;

function somaElementos(array) {
    for (let numero of array) {
        total += numero;
    }
    return total;
}

console.log(somaElementos(meuArray));
