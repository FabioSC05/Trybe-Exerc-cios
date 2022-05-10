const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let index = 1; index < oddsAndEvens.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (oddsAndEvens[index2] > oddsAndEvens[index]) {
      let number = oddsAndEvens[index2];
      oddsAndEvens[index2] = oddsAndEvens[index];
      oddsAndEvens[index] = number;
    }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);