const estudante = require ('./estudante.json');

const stringEstudante = JSON.stringify(estudante);

console.log(stringEstudante);
console.log(typeof stringEstudante);

//console.log(stringEstudante.nome); 
//agora é conjunto de caracteres, nao um objeto, por isso nao funciona

const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante);
console.log(typeof objEstudante);