//Dado o array frutas contendo frutas que desejamos comprar na feira:
//const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
//Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

console.log(frutas);

frutas.splice(2, 2, 'Kiwi', 'Pessego');

console.log(frutas);
