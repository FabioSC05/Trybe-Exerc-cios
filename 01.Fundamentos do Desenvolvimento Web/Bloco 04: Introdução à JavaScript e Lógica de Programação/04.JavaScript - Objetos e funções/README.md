# DIA 4

O objetivo dos exercícios desse dia foi continuar focando nos conhecimentos de JavaScript, através do uso de Arrays e também for/in e for/off, e o importante uso das funções.

Os requisitos do exercício são:

Objetos

script.js

1. Criar um objeto player contendo as variáveis listadas abaixo.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

2. Acessar as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

3. Adicionar ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

[2006, 2007, 2008, 2009, 2010, 2018]

4. Acessar a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

5. Acessar a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

for/in e for/of

script2.js

1. Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

2. Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

Funções

Pegar cada um dos exercícios de 1 a 5 do final do dia 4.1 e fazer com que todos eles sejam funções de um mesmo arquivo. As variáveis definidas no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código , verificar se ele ainda está funcionando conforme especificado.

script3.js

1. Fazer cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
  * Adição (a + b)
  * Subtração (a - b)
  * Multiplicação (a * b)
  * Divisão (a / b)
  * Módulo (a % b)

2. Fazer um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

3. Fazer um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

4. Fazer um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
  * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  * Um ângulo será considerado inválido se não tiver um valor positivo.

Exercícios

Parte I - Objetos e For/In

script4.js

Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

1. Imprimir no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

Bem-vinda, Margarida

2. Inserir no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

3. Fazer um for/in que mostre todas as chaves do objeto. Valor esperado no console:

personagem
origem
nota
recorrente

4. Fazer um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!

Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

6. Acessar as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e fazer um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

7. Adicionar um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

8. Acessar as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

Parte II - Funções

script5.js

1. Criar uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
  * Exemplo de palíndromo: arara.
  * verificaPalindrome('arara');
  * Retorno esperado: true
  * verificaPalindrome('desenvolvimento');
  * Retorno esperado: false

2. Criar uma função que receba um array de inteiros e retorne o índice do maior valor.
  * Array de teste: [2, 3, 6, 7, 10, 1];.
  * Valor esperado no retorno da função: 4.

3. Criar uma função que receba um array de inteiros e retorne o índice do menor valor.
  * Array de teste: [2, 4, 6, 7, 10, 0, -3];.
  * Valor esperado no retorno da função: 6.

4. Criar uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  * Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
  * Valor esperado no retorno da função: Fernanda.

5. Criar uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
  * Array de teste: [2, 3, 2, 5, 8, 2, 3];.
  * Valor esperado no retorno da função: 2.

6. Criar uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
  * Valor de teste: N = 5.
  * Valor esperado no retorno da função: 1+2+3+4+5 = 15.

7. Criar uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
  * Valor de teste: 'trybe' e 'be'
  * Valor esperado no retorno da função: true
  * verificaFimPalavra('trybe', 'be');
  * Retorno esperado: true
  * verificaFimPalavra('joaofernando', 'fernan');
  * Retorno esperado: false

Bônus

script6.js

1. Fazer um programa que receba uma string em algarismos romanos e retornar o número que a string representa.
  * Uma string é um array de caracteres, então cada elemento do array é uma letra.
  * O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

  * Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

2. Criar uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorrer essa variável, buscar os números pares e os adicionar a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

3. A partir do array de frutas basket , retornar um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprimir esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

4. Acessar as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e fazer um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

5. Utilizar o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois fazer o mesmo para os moradores do bloco 2.
