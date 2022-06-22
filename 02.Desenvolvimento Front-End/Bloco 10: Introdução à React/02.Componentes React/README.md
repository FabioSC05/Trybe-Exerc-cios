# DIA 2

O objetivo dos exercícios desse dia foi continuar explorando o React e as Props/PropTypes.

Os requisitos do exercício são:

Para fixar

Pasta fixation-exercises-10-2

1. Qual o nome do componente declarado acima?
R: Image
2. Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada.

3. O que o componente App é em relação a Order?
R: Pai
4. 🚀 Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.

5. Crie os componentes Image e UserProfile no diretório src do projeto fixation-exercises-10-2.

6. Altere a chamada do componente de UserProfile de forma que a lista seja gerada dinamicamente de maneira adequada.

Exercícios

Pasta my-pokedex

Criar uma pokedex com os Pokemon disponíveis e adiciona-los a tela sendo obrigatório implementar pelo menos os dois componetentes a seguir.

1. Pokemon: como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
  * nome do pokemon;
  * tipo do pokemon;
  * peso médio do pokemon, acompanhado da unidade de medida usada;
  * imagem do pokemon.

2. Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.
