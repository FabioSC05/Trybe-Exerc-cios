# DIA 4

O objetivo dos exercícios desse dia foi criar arquivos e executar comandos.

Os requisitos do exercício são:

Parte I

1. Navegar até a pasta unix_tests;

2. Criar um arquivo texto pelo terminal com o nome skills2.txt e adicionar os valores Internet, Unix e Bash, um em cada linha.

3. Adicionar mais 5 itens à lista de skills e depois imprimir a lista ordenada no terminal. 🤓

4. Contar quantas linhas tem o arquivo skills2.txt.

5. Criar um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

6. Criar um novo arquivo chamado phrases2.txt pelo terminal e adicionar algumas frases.

7. Contar o número de linhas que contêm as letras br.

8. Contar o número de linhas que não contêm as letras br.

9. Adicionar dois nomes de países ao final do arquivo phrases2.txt.

10. Criar um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

11. Ordenar o arquivo bunch_of_things.txt.

Parte II

1. Navegar até a pasta unix_tests;

2. Rodar o comando ls -l e ver quais as permissões dos arquivos;

3. Mudar a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

4. Tirar a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verificar se está correto com o comando ls -l;

5. Voltar à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

Parte III

1. Listar todos os processos;

2. Agora usar o comando sleep 30 &;

3. Usar a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e terminar a sua execução (matar o processo);

4. Executar novamente o comando sleep 30, mas agora sem o &. Depois, fazer com que ele continue executando em background;

5. Criar um processo em background que rode o comando sleep por 300 segundos.

6. Criar mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
  Deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

7. Verificar que apenas o processo sleep 300 está em execução com o comando jobs. Suspender a execução desse processo.
  Trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.

8. Retomar a execução do processo sleep 100 em background com o comando bg.

9. Terminar a execução de todos os processos sleep (matar os processos).
