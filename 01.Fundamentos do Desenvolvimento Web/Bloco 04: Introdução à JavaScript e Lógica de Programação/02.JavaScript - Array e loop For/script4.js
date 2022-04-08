let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma = numbers[index] + soma;
}

console.log(soma);

console.log(soma / numbers.length);

if (soma / numbers.length > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

for (let index = 0; index < numbers.length; index += 1) {
  let numeroMaior = true;
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
      numeroMaior = false;
    }
  }
  if (numeroMaior) {
    console.log(numbers[index]);
  }
}

let valoresImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    valoresImpares = valoresImpares + 1;
  }
}

if (valoresImpares > 0) {
  console.log(valoresImpares);
} else {
  console.log("nenhum valor impar encontrado")
}

for (let index = 0; index < numbers.length; index += 1) {
  let numeroMenor = true;
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] > numbers[index2]) {
      numeroMenor = false;
    }
  }
  if (numeroMenor) {
    console.log(numbers[index]);
  }
}

let numeros25 = [];

for (let index = 1; index <= 25; index += 1) {
  numeros25.push(index);
}

console.log(numeros25);

for (let index = 0; index < numeros25.length; index += 1){
  let resultado = numeros25[index] / 2;
  console.log(resultado);
}