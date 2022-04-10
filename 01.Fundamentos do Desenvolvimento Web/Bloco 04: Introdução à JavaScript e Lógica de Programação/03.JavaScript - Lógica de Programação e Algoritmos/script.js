let fatorial10 = 0;

for (let index = 9; index > 0; index -= 1) {
  if (index === 9) {
    fatorial10 = (index + 1) * (index);
  } else {
    fatorial10 = fatorial10 * (index);
  }
}

console.log(fatorial10);

let word = "tryber";
let wordReversed;

for (let index = word.length - 1; index >= 0; index -= 1) {
  if (index === word.length - 1) {
    wordReversed = word[index];
  } else {
    wordReversed = wordReversed + word[index];
  }
}

console.log(wordReversed);

let array = ['java', 'javascript', 'python', 'html', 'css'];

for (let index = 0; index < array.length; index += 1) {
  let valorMaior = true;
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index].length < array[index2].length) {
      valorMaior = false;
    }
  }
  if (valorMaior) {
    console.log(array[index]);
  }
}

for (let index = 0; index < array.length; index += 1) {
  let valorMenor = true;
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index].length > array[index2].length) {
      valorMenor = false;
    }
  }
  if (valorMenor) {
    console.log(array[index]);
  }
}

let numerosPrimos = [];

for (let indexMaior = 2; indexMaior <= 50; indexMaior += 1) {
  let divisao = true;
  for (let indexMenor = 2; indexMenor < indexMaior; indexMenor += 1) {
    if (indexMaior % indexMenor === 0) {
      divisao = false;
    }
  }
  if (divisao) {
    numerosPrimos.push(indexMaior);
  }
}

console.log(numerosPrimos[numerosPrimos.length - 1]);