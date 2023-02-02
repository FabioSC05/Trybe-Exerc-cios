# DIA 3

O objetivo dos exercícios desse dia foi utilizar o aprendizado em testes agora com o Mocha, Chai e dublês de teste com o Sinon para testar os endpoints da API.

Os requisitos do exercício são:

Exercícios

1. Crie os testes de integração para o endpoint GET /chocolates/total
  * Crie um caso para o código retornado
  * Crie outro caso para o retorno esperado

2. Implemente o endpoint GET /chocolates/total na aplicação
  * Crie um novo endpoint retornando o total de chocolates na base de dados
  * Depois de implementar, verifique se os testes passam com sucesso

3. Crie os testes de integração para o endpoint GET /chocolates/search
  * Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado;
  * Crie um caso para quando não existirem chocolates com o nome informado;
  * Verifique se os testes falham com sucesso.

4. Implemente o endpoint GET /chocolates/search na aplicação
  * Crie um novo endpoint retornando os chocolates que tem a string name na base de dados;
  * Depois de implementar, verifique se os testes passam com sucesso.

5. Crie os testes de integração para o endpoint PUT /chocolates/:id
  * Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado;
  * Crie um caso para quando não existe chocolate com o id informado;
  * Verifique se os testes falham com sucesso.

6. Implemente o endpoint PUT /chocolates/:id na aplicação
  * Crie um novo endpoint que atualiza um chocolate na base de dados;
  * Depois de implementar, verifique se os testes passam com sucesso.
