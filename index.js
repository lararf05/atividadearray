// 1. Crie um array chamado notas que armazene as notas de cinco alunos.
let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

// 2. Acesso aos Elementos: Exiba no console a primeira e a última nota do array.
console.log('Primeira nota:', notas[0]);
console.log('Última nota:', notas[notas.length - 1]);

// 3. Adicione uma nova nota ao final do array usando push().
notas.push(8.5);
console.log('Notas após adicionar uma nova nota:', notas);

// 4. Remova a primeira nota do array usando shift().
notas.shift();
console.log('Notas após remover a primeira nota:', notas);

// 5. Iteração com forEach: Itere sobre o array notas e exiba cada nota no console.
console.log('Notas com forEach:');
notas.forEach(nota => console.log(nota));

// 6. Cálculo da Média: Utilize o método reduce para calcular a média das notas.
let somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let mediaNotas = somaNotas / notas.length;
console.log('Média das notas:', mediaNotas);

// 7. Filtro de Notas: Use o método filter para criar um novo array com as notas maiores que 7.
let notasMaioresQue7 = notas.filter(nota => nota > 7);
console.log('Notas maiores que 7:', notasMaioresQue7);

// 8. Ordenação: Ordene o array notas em ordem crescente utilizando o método sort.
notas.sort((a, b) => a - b);
console.log('Notas ordenadas:', notas);

// 9. Busca de Elementos: Verifique se a nota 6.5 está presente no array utilizando includes.
let temNota6_5 = notas.includes(6.5);
console.log('Nota 6.5 está no array?', temNota6_5);

// 10. Encontre o Índice: Utilize o método indexOf para encontrar o índice da nota 8.0.
let indiceNota8_0 = notas.indexOf(8.0);
console.log('Índice da nota 8.0:', indiceNota8_0);
