const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//set é um conjunto, tipo de dado que armazena valores *únicos*, array like, mas não é array
//métodos de array nao vão funcionar, como reduce, pop, push
// const nomesAtualizados = new Set(nomes); //case sensitive S maiusculo

//agora da pra usar 
const listaNomesAtualizado = [...new Set(nomes)];

console.log(listaNomesAtualizado);
