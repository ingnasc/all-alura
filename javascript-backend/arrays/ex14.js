//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray (array, funcaoCallback) {
    return array.map (funcaoCallback);
}

function dobraNumero (numero) {
    return numero * 2;
}

const numerosArray = [5, 6, 9, 8, 7];

const numerosDobrados = executaOperacaoEmArray (numerosArray, dobraNumero);

console.log (numerosDobrados);
