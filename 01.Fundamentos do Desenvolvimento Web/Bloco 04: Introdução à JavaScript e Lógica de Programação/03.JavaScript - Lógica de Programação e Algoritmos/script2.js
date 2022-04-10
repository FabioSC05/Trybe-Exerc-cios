let n = 5;

if (n > 1) {
  for (let index = 1; index <= n; index += 1) {
    let asterisco = "";
    for (let linha = 1; linha <= n; linha += 1) {
      asterisco = asterisco + "*";
    }
    console.log(asterisco);
  }
} else {
  console.log("Precisa ser Maior que 1.")
}

if (n > 1) {
  for (let index = 1; index <= n; index += 1) {
    let asterisco = "";
    for (let linha = 1; linha <= index; linha += 1) {
      asterisco = asterisco + "*";
    }
    console.log(asterisco);
  }
} else {
  console.log("Precisa ser Maior que 1.")
}

for (let index = 1; index <= n; index += 1) {
  let asterisco = "";
  for (let linha = n; linha >= 1; linha -= 1) {
    if (linha <= index) {
      asterisco = asterisco + "*";
    } else {
      asterisco = asterisco + " ";
    }
  }
  console.log(asterisco);
}

let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
}

let middle = (n + 1) / 2;
controlLeft = middle;
controlRight = middle;
symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

for (let indexMaior = 2; indexMaior <= n; indexMaior += 1) {
  let divisao = true;
  for (let indexMenor = 2; indexMenor < indexMaior; indexMenor += 1) {
    if (indexMaior % indexMenor === 0) {
      divisao = false;
    }
  }
  if (divisao === true) {
    let = resposta = "É um número Primo";
  } else {
    let = resposta = "Não é um número Primo";
  }
}

console.log(resposta);