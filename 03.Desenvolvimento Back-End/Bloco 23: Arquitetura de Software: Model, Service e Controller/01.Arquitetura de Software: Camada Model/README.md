# DIA 1

O objetivo dos exercícios desse dia foi refatorar um repositório baseado na arquitetura Model, Service e Controller, onde o foco foi a camada Model, assim organizando todas as chamadas ao banco de dados no mesmo lugar.

Os requisitos do exercício são:

Exercícios

1. Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.
Você deve verificar que:
  * A função retorna uma estrutura de array;
  * Retorna a lista de pessoas motoristas.
  * De olho na dica 👀: Crie o stub da conexão com o banco de dados.
  * Crie a camada de model responsável por listar todas as pessoas motoristas.

2. Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.
Você deve verificar que:
  * Retorna o id do carro cadastrado.
  * Crie a camada de model responsável por cadastrar um carro.

3. Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.
Você deve verificar que:
  * Retorna o carro solicitado pelo id.
  * Crie a camada de model responsável por encontrar um carro por meio do id.

4. Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.
Você deve verificar que:
  * Retorna a pessoa motorista solicitado pelo id.
  * Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

5. Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.
Você deve verificar que:
  * Retorna a pessoa motorista cadastrada.
  * Crie a camada de model responsável por cadastrar uma pessoa motorista.

6. Crie testes unitários da camada de model responsável por criar o relacionamento N:N entre as pessoas motoristas e os carros.
Você deve verificar que:
  * Retorna o relacionamento entre motorista e carro cadastrado.
  * Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.
