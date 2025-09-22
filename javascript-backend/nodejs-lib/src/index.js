// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) =>{
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })

    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n'); //encadeando métodos
}

function limpaPalavras (palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3 ) {
        const palavraLimpa = limpaPalavras(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    });

    return resultado;
}