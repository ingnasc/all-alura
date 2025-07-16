//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function imprimeElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }
}

const meuArray = [21, 54, 98, 64, 57, 41];
imprimeElementos(meuArray);