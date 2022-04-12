function verificaPalindrome (name) {
  let = palindrome = "";
  for (let index = name.length - 1; index >= 0; index -= 1) {
    palindrome = palindrome + name[index];
  }
  if (name === palindrome) {
    return true;
  } else {
    return false;
  }
}

function arrayMaior (array) {
  let numero = 0;
  for (let index in array) {
    if (array[numero] < array[index]) {
      numero = index;
    }
  }
  return numero;
}

console.log(arrayMaior([2, 3, 6, 7, 10, 1]));

function arrayMenor (array) {
  let numero = 0;
  for (let index in array) {
    if (array[numero] > array[index]) {
      numero = index;
    }
  }
  return numero;
}

console.log(arrayMenor([2, 4, 6, 7, 10, 0, -3]));

function arrayNomesMaior (array) {
  let numero = 0;
  for (let index in array) {
    if (array[numero].length < array[index].length) {
      numero = index;
    }
  }
  return array[numero];
}

console.log(arrayNomesMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaN (n) {
  let resultado = 0;
  if (n < 1) {
    return "Inválido"
  } else {
    for (let index = n; index > 0; index -= 1) {
      resultado = resultado + index;
    }
    return resultado;
  }
}

console.log(somaN (5));

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));