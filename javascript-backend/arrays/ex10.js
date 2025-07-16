//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

function imprimeElementos(array) {
    for (let elemento of array) {
        console.log(elemento); 
    }
}

const meuArray = [21, 54, 98, 64, 57, 41];
imprimeElementos(meuArray);