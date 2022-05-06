# DIA 5

O objetivo dos exercícios desse dia foi continuar trabalhando com flexbox e seus atributos nos itens, align-self, order, flex-grown, flex-shrink, flex-basis.

Os requisitos do exercício são:

Mão na massa.

index.html e style.css

Para os exercícios não precisa alterar o arquivo HTML, apenas o CSS. 😉

1. A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px.

2. A segunda div só poderá aparecer apenas se a largura estiver entre 600px e 1000px.

3. A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px.

4. Sem alterar a classe trick, faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura.

Exercícios

Parte I - Criar uma página para uma tela pequena

exercise1.html e exercise1.css

1. Faça o tamanho da fonte ser maior;

2. Faça o tamanho da fonte dos elementos h1 ser menor;

3. Aumente o espaçamento entre as figuras;

4. Adicione um pouco de margin na página.

5. Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px). Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;

6. Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width do teste da media query. Dentro desse breakpoint, adicione os seguintes ajustes:
  * Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Faça as imagens serem mostradas em duas colunas.

7. Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.

8. Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px), e realize os seguintes ajustes dentro do breakpoint:
  * Altere a cor de fundo;
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

Parte II - Criando 3 layouts diferentes utilizando o mobile first

exercise2.html e exercise2.css

1. Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande). Faça pelo menos um commit para cada layout;

2. Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:
  * Onde a lista de capítulos deve estar posicionada?
  * Como a história deve ser mostrada?
  * Como o cabeçalho deve ser posicionado?
  * O que fazer com as informações do autor em cada tamanho de tela?
