# DIA 5

O objetivo dos exercícios desse dia foi terminar a parte de High Order Functions com Spread Operator, Rest, Destructuring e Parameter Default.

Os requisitos do exercício são:

Spread Operator

Para fixar

fruitSalad.js

Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

Object Destructuring

Para fixar

trappistEnterprise.js

1. Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

2. Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

Array Destructuring

Para fixar

arrays.js

1. Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

2. A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

3. Array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

Default Destructuring

Para fixar

getNationality.js

Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

Object Property Shorthand

Para fixar

getPosition.js

Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

Default Parameters

Para fixar

multiply.js

Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

Exercícios

exercise1.js

1. Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
  * Dica: use spread operator.

exercise2.js

2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
  * Dica: use parâmetro rest.

exercise3.js

3. Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
  * Dica: use object destructuring.

exercise4.js

4. Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
  * Dica: use object destructuring.

exercise5.js

5. Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
  * Dica: use array destructuring.

exercise6.js

6. Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
  * Dica: use array destructuring e abbreviation object literal.

exercise7.js

7. Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
  * Dica: use object destructuring.

exercise8.js

8. Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
  * Dica: use default params.

exercise9.js

9. Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
  * Dica: use object destructuring e spread operator.
  * OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.
