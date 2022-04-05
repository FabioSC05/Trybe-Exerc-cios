# DIA 4

O objetivo dos exercí­cios desse dia foi colocar em prática o que havia aprendido sobre HTML semântico. Para isso deveria a partir do código inicial abaixo, desenvolver uma página que apresenta um dos animais mais impressionantes que existem: o (Stomatopoda)[https://www.nationalgeographic.com/science/phenomena/2014/07/03/natures-most-amazing-eyes-just-got-a-bit-weirder/]. Sendo que toda a estilização da página ficou ao meu critério.

Os requisitos do exercí­cio são:

Criar um arquivo html chamado index.html.

1. Copiar o código HTML abaixo. Em seguida, fazer a implementação das propriedades CSS e, se necessário, fazer adições à estrutura HTML existente, para que o resultado final seja similar à imagem referência.
  * Lembrar que a estrutura da página deve ser mantida para que a semântica do código seja preservada.

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <style></style>
  </head>
  <body>
    <header>
      <h1>Hackathon Results</h1>
    </header>
    <section>
      <ul>
        <li class="first">1º - Equipe 1</li>
        <li class="second">2º - Equipe 2</li>
        <li class="third">3º - Equipe 3</li>
      </ul>
    </section>
    <section>
      <h3>Premiação Primeiro Lugar:</h3>
      <ul>
        <li>| R$ 1000,00 por integrante da equipe |</li>
        <li>| Bootcamp de 2 meses com possibilidade de contratação |</li>
      </ul>
      <h3>Premiação Segundo Lugar:</h3>
      <ul>
        <li>| R$ 600,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
      <h3>Premiação Terceiro Lugar:</h3>
      <ul>
        <li>| R$ 300,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
    </section>
  </body>
</html>

Criar um arquivo html chamado index2.html.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <!--insira os elementos aqui-->
  </body>
</html>

1. Adicionar um cabeçalho na página contendo o tí­tulo `Soco a 80km/h: Conheça o Stomatopoda`.

2. Adicionar um conjunto de links que representam a área de navegação do site.
  * Criar um link chamado `Página Inicial`.
  * Criar um link chamado `Sobre`.
  * Criar um link chamado `Contato`.

3. Criar um artigo que vai conter os fatos interessantes sobre o `Stomatopoda`. O artigo terá o subtítulo `Fatos sobre o Stomatopoda`.

4. Dividir o artigo em seções, organizando-o da seguinte forma:
  * Uma primeira seção contendo informações gerais a respeito do animal. O subtítulo para essa seção ficou a meu critério. Sendo necessário que conste nessa seção seu nome científico, que é `Odontodactylus Scyllarus`, em itálico. Além disso, é preciso que haja informação tabular a respeito de sua classificação científica, em específico: `Reino`, `Filo`, `Subfilo`, `Classe`, `Subclasse` e `Ordem`.
  * As outras seções dizem respeito aos fatos interessantes que escolheu acerca do animal. Para cada fato escolhido um seção deve ser criada.
  * Adicionar para cada seção um subtí­tulo referente ao fato escolhido.
  * Adicionar, para cada seção, parágrafo(s) descrevendo o fato escolhido. Destacando caracterí­sticas impressionantes referentes ao fato que escolhido, de forma a reforçar a unicidade do `Stomatopoda`.
  * Adicionar, para cada seção, uma imagem, como forma de ilustrar o fato.
  * Adicionar, por fim, uma seção de referências bibliográficas, contendo uma lista de todos os links que foram usados como base para compilar a página em questão.

5. Adicionar um conteúdo adjacente ao artigo, disponibilizando um link para (este vídeo)[https://www.youtube.com/watch?v=E0Li1k5hGBE], que mostra o animal em ação.

6. Adicionar um rodapé na página, mostrando algo do gênero:

Conteúdo compilado por Fábio de Souza Carvalho, 2022.

Sendo `obrigatório` fazer uso de no mí­nimo 6 elementos com as seguintes tags: header, nav, article, section, h1, h2, h3, aside, footer, table e img.
