const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(
//     function (nota) {
//         return nota + 1;
//     }
// )

//map sempre retorna um array com cada um dos resultados

const notasAtualizadas = notas.map((nota)  => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas);
