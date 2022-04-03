# DIA 3

O objetivo dos exercícios desse dia foi customizar uma página com CSS e estilizar o portfólio no GitHub Pages.

Os requisitos do exercício são:

Box Model - Modelo de caixas no CSS

Criar um arquivo html chamado index.html e um arquivo css chamado style.css.

index.html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>

style.css

.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* inserir na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* inserir na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* inserir na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}

Posicionamento de Elementos

Criar um arquivo html chamado index2.html e um arquivo css chamado style2.css.

index2.html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Posicionamento de elementos</title>
    <link rel="stylesheet" href="./style2.css" />
  </head>
  <body>
    <h1>Exercícios de fixação 3.3</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/3AVnjks" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>

style2.css

.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}

Personagens pertencentes à Nintendo©
1. Posicionar o Mario acima do Goomba.

2. Posicionar a tag p para ficar dentro do balão de fala.

3. Posicionar o balão para se tornar uma fala de Bowser.

Agrupamento de Seletores e Pseudoclasses

Criar um arquivo html chamado index3.html e um arquivo css chamado style3.css.

index3.html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style3.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>

1. Adicionar uma lista ordenada dos 3 melhores sites que conhece.

2. Criar um arquivo no mesmo diretório e nomear de 'style3.css'.

3. Nesse arquivo .css, adicionar os estilos para que:
  * O texto das tags 'h1' e 'p' estejam centralizados.
  * A cor de fundo da lista mude quando o cursor estiver sobre o item.
  * A fonte do item mude quando ele for clicado.

4. Adicionar uma lista não ordenada com, pelo menos, 3 características que gosta.

5. No 'style.css', adicionar a propriedade 'list-style: none' para ambas as listas.

Criar um arquivo html chamado index4.html e um arquivo css chamado style4.css.

index4.html

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudoclasses</title>
  <link rel="stylesheet" href="style4.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>

1. Estilizar as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.

2. Fazer cada div ter uma cor própria.

3. Estilizar cada uma das tags h3.

4. Fazer a terceira div ser maior que as demais.

5. Deixar as tags ímpares h3 com o texto em itálico.

Combinações e Classes Descendentes

Criar um arquivo html chamado index5.html.

index5.html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>

Criar o arquivo style5.css e resolver os seguintes exercícios:

1. Fazer com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, fazer a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilizar a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).

2. Fazer todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumentar seu tamanho para 40px e acrescentar uma borda de 1px preta e sólida.

3. Fazer todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilizar a propriedade font-weight para deixá-lo negrito.

4. Na listagem de linguagens de programação, fazer com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilizar uma cor de fundo rosa.

5. (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, fazer com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"
Dica 1: Utilizar o seletor :hover para controlar o passar do mouse.
Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).

Estilizar o Portfólio no GitHub Pages.
