const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

//como é um arquivo de texto, tem que passar o encode também
fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    // verificaPalavrasDuplicadas(texto);
})

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n'); //encadeando métodos
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
    })

    console.log(contagem);
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });

    return resultado;
}