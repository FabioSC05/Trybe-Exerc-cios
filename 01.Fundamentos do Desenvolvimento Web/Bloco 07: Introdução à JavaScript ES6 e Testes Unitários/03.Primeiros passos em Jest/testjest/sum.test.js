const sum = require('./sum.js');

describe('Os resultados da função sum são somados', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});