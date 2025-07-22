//1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const numerosArray = [5, 6, 9, 8, 7];

numerosArray.forEach (
    function (numero, indice) {
        console.log(`Índice: ${indice}, Nota ${numero}`);
    }
);