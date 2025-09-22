import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

// const fs = require('fs');
// const trataErros = require ('./erros/funcoesErro');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

//como é um arquivo de texto, tem que passar o encode também
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        contaPalavras(texto);
    } catch (erro) {
        console.log(trataErros(erro));
    }
})