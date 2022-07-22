# DIA 1

O objetivo dos exercícios desse dia foi uma introdução ao Redux com o uso de actions, reducers e store.

Os requisitos do exercício são:

Exercícios

Exercício 1

Vamos construir um estado gerenciado pelo Redux e vamos realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux.

index.html

1. Crie uma store para a nossa aplicação.

2. Crie um reducer, implementando um switch retornando apenas o estado inicial como default. Não se esqueça de colocar o reducer como parâmetro para o createStore, feito na etapa anterior.

3. Incremente o switch criado no exercício anterior com os cases NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE. Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

4. Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.

5. Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.

6. Crie um botão com o texto Random color, um eventListener e uma action no reducer adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela.

Exercício 2

Vamos fazer uma aplicação que combina dois reducers: um para o tema (light mode e dark mode) e outro para o status do usuário (online e offline). Um botão deverá mudar o tema e outro botão deverá mudar o status.

index2.html

1. Combine os reducers existentes com a função combineReducers e salve-o em uma constante.

2. Crie uma store com a combinação dos reducers.

3. Adicione um case dentro do switch de cada um dos reducers para alterar os estados theme e status. O objetivo do themeReducer é alternar o theme entre 'light' e 'dark'. O objetivo do statusReducer é alternar o status entre 'offline' e 'online'.

4. Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

5. Adicione um store.subscribe() para atualizar as seguintes informações na página:
  * Se o tema for light, o body deverá possuir uma cor de fundo escura e uma letra clara.
  * Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura.
  * Se o status for online, o #status deverá possuir o texto Online. Se o status for offline, o #status deverá possuir o texto Offline.
  * Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.

Bônus 1

Você irá fazer 13 exercícios propostos pelo site freecodecamp, com objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no Redux.

1. Definindo um action creator.

2. Enviando uma action para um reducer.

3. Criando um Reducer para receber e manipular uma action.

4. Criando um reducer que aceita actions de tipos distintos.

5. Usando const para os action types.

6. Registrando um listener para no store.

7. Combinando múltiplos reducers.

8. Enviando dados através das actions.

9. Criando um contador com Redux.

10. Por que nunca modificar um state?

11. Utilizando o spread operator como ferramenta para manter a imutabilidade do state.

12. Removendo itens de um array preservando a imutabilidade.

13. Trabalhando com Object.assign

Bônus 2

aula.html

Agora você irá incrementar o código que foi feito durante a aula ao vivo.
  * Faça um campo que recebe um valor e esse será o valor aplicado ao botão incremento.
  * Faça um campo que recebe um valor e esse será o valor aplicado ao botão decremento.
  * Armazene um outro valor no state, chamado clickCount. Este campo vai contar o número de vezes que qualquer botão na tela foi clicado.
  * Armazene um array no state que guarda o valor individual que foi adicionado a cada click em qualquer um dos três botões.
