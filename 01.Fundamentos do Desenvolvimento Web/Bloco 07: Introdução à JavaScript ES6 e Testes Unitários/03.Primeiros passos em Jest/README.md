# DIA 3

O objetivo dos exercícios desse dia foi sobre o uso correto de let e const, arrow functions, template literals e ternary operator.

Os requisitos do exercício são:

Instalando o Jest

1. Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:

const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
