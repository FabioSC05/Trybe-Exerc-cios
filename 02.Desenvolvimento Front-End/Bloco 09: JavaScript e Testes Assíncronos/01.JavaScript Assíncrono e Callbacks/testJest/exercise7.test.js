const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Retorna a função da forma correta', () => {
  it('Verifica se ao inserir as palavras em minúsculo elas voltam em maiúsculo', (done) => {
    uppercase('o mundo é meu', (returned) => {
      try {
        expect(returned).toBe('O MUNDO É MEU');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});