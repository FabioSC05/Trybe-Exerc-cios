const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.round(Math.random() * 5);

  return callback(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, numberChecker));