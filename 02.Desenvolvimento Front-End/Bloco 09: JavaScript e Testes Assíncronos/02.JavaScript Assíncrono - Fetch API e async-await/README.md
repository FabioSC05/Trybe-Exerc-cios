# DIA 2

O objetivo dos exercícios desse dia foi sobre API's, fetch, promises e async/await.

Os requisitos do exercício são:

Para fixar

1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
R - Um código assíncrono é um código que é executado fora da fila e depois volta pra fila para ser lançado, o código síncrono trava um bloco até toda sua execução, então o código não precisa esperar enquanto o assíncrono é executado.

2. Quando você tem que enfileirar várias callbacks, que problema surge?
R - Surge as Callbacks Hell, que faz com que o código acabe ficando muito grande e mal organizado.

3. Por que as Promises são uma forma de resolver esse problema?
R - Pois as promisses são executadas de forma assíncrona, que independem do que está sendo executado e também de uma forma mais clara.

4. Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
R - Deve ser assíncrona, pois como depende de um serviço externo, poderia manter o código travado, e dessa forma sendo assíncrona o código é executado por fora.

5. Dada a resposta anterior, o que é fetch e para que ele serve?
R - O fetch serve para pegar o endereço de uma API e lançar uma promise no código, que pode ser manipulada pelo usuário.

Exercícios

Pasta fetch

jokes.html e apiScript.js

1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!
  * Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
  * Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com, e perceba que ele devolve uma página HTML com uma piada aleatória.
  * Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
  * Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
  * Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.
  * Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.
  * Utilize o HTML e o js a seguir como base: (não se esqueça de utilizar a extensão Live Server e inspecionar o console do navegador para ver os logs).

  * Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
   1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
   2. Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers.

2. Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
A documentação para a API que vamos utilizar esta disponível nesse link.
Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).

url: `https://api.coincap.io/v2/assets`

index.html, style.css e api.js

1. Agora que temos a url vamos criar um arquivo (api.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.
2. Crie também um arquivo HTML (index.html, por exemplo) que deve conter uma tag para listar as crypto moedas.
3. 🚀 Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.
4. 🚀 Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

Bonus

Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?
Para este exercício vamos utilizar a Currency API. Tente descobrir qual url retorna os dados necessários para este exercício.
