const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ array1, array2 ] = saudacoes;

array2(array1);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const mix = [comida, animal, bebida];

[ animal, bebida, comida ] = mix;

console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[num1, num2, num3, ...rest] = numerosPares;

numerosPares = rest;

console.log(numerosPares);