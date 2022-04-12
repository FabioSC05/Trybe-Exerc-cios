function ex1 (num1, sinal, num2) {
  if (sinal === "+") {
    console.log(num1 + num2);
  } else if (sinal === "-") {
    console.log(num1 - num2);
  } else if (sinal === "*") {
    console.log(num1 * num2);
  } else if (sinal === "/") {
    console.log(num1 / num2);
  } else if (sinal === "%") {
    console.log(num1 % num2);
  } else {
    console.log("Inválido")
  }
}

function ex2 (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else if (num1 === num2) {
    console.log("Números Iguais");
  } else {
    console.log("Inválido");
  }
}

function ex3 (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  } else {
    console.log("Inválido")
  }
}

function ex4 (num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Inválido")
  }
}

function ex5 (num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    console.log("erro");
  } else if (num1 + num2 + num3 === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}