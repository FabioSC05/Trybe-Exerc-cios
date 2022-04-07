const a = 10;
const b = 2;
const c = 14;
let xadrez = "Rei";
let nota = 90;
const valorCusto = 1000;
const valorVenda = 1500;
let valorCustoTotal = valorCusto + (valorCusto * 0.2);
let salario = 3000;
let INSS;
let IR;
let salarioBase;
let salarioFinal;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b)
}

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}

if (a === 0) {
  console.log("Zero");
} else if (a % 2 === 0) {
  console.log("Positive");
} else if (a % 2 !== 0) {
  console.log("Negative");
}

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log("erro");
} else if (a + b + c === 180) {
  console.log(true);
} else {
  console.log(false);
}

if (xadrez.toLowerCase() === "peão") {
  console.log("Anda uma casa e come na diagonal.");
} else if (xadrez.toLowerCase() === "torre") {
  console.log("Anda quantas casas quiser na horizontal e vertical.");
} else if (xadrez.toLowerCase() === "cavalo") {
  console.log("Anda em forma de L");
} else if (xadrez.toLowerCase() === "bispo") {
  console.log("Anda quantas casas quiser na diagonal.");
} else if (xadrez.toLowerCase() === "rainha") {
  console.log("Anda em qualquer direção quantas casas quiser.");
} else if (xadrez.toLowerCase() === "rei") {
  console.log("Anda em qualquer direção apenas uma casa por vez.");
} else {
  console.log("Erro");
}

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota <= 100) {
  console.log("B");
} else if (nota >= 70 && nota <= 100) {
  console.log("C");
} else if (nota >= 60 && nota <= 100) {
  console.log("D");
} else if (nota >= 50 && nota <= 100) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else {
  console.log("Erro");
}

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

console.log((valorVenda - valorCusto) * 1000);

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro");
} else {
  console.log((valorVenda - valorCustoTotal) * 1000);
}

if (salario <= 1556.94) {
  INSS = salario * 0.08;
  salarioBase = salario - INSS;
} else if (salario <= 2594.92) {
  INSS = salario * 0.09;
  salarioBase = salario - INSS;
} else if (salario <= 5189.82) {
  INSS = salario * 0.11;
  salarioBase = salario - INSS;
} else if (salario > 5189.82) {
  INSS = 570.88;
  salarioBase = salario - INSS;
}

if (salarioBase <= 1903.98) {
  IR = 0;
  salarioFinal = salarioBase - IR;
} else if (salarioBase <= 2826.65) {
  IR = (salarioBase * 0.075) - 142.80;
  salarioFinal = salarioBase - IR;
} else if (salarioBase <= 3751.05) {
  IR = (salarioBase * 0.15) - 354.80;
  salarioFinal = salarioBase - IR;
} else if (salarioBase <= 4664.68) {
  IR = (salarioBase * 0.225) - 636.13;
  salarioFinal = salarioBase - IR;
} else if (salarioBase > 4664.68) {
  IR = (salarioBase * 0.275) - 869.36;
  salarioFinal = salarioBase - IR;
}

console.log(salarioFinal);