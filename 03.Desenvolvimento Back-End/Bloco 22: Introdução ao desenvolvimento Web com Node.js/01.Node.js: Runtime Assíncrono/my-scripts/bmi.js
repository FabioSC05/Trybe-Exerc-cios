const ask = require('readline-sync');

const imc = (weight, height) => weight / (height ** 2);

const values = (iv) => {
  if (iv < 18.5) {
    return 'Abaixo do peso (magreza)';
  }
  if (iv > 18.5 && iv < 24.9) {
    return 'Peso normal';
  }
  if (iv > 25.0 && iv < 29.9) {
    return 'Acima do peso (sobrepeso)';
  }
  if (iv > 30.0 && iv < 34.9) {
    return 'Obesidade grau I';
  }
  if (iv > 35.0 && iv < 39.9) {
    return 'Obesidade grau II';
  }
  return 'Obesidade graus III e IV';
}

const aw = ask.question('What’s your weight?');
const ah = ask.questionFloat('What’s your height?');

const calculate = imc(aw, ah);
const results = values(calculate);

console.log(calculate);
console.log(results);
