# DIA 2

O objetivo dos exercícios desse dia foi executar comandos aprendidos no GitHub, criar Pull Requests e sincronizar de maneira correta com o diretório Remoto e Local.

Os requisitos do exercício são:

⚠️ Para os exercícios a seguir, deve utilizar o projeto com o texto no arquivo .txt, localizado dentro do diretório do dia anterior, criar uma cópia para usar no dia de hoje.

1. Navegar até a raiz do projeto com o arquivo .txt;

2. Verificar se não existe nada sem "commitar" utilizando git status:
  * Caso exista algo, verificar se é necessário e fazer o commit, ou remove-lo.

3. Criar uma nova branch com o nome trybe-skills-changes e fazer checkout nela;

4. No arquivo .txt, ao final da lista de habilidades, adicionar mais duas habilidades que serão desenvolvidas na Trybe:
  * Exemplo:

O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS

  * Fazer um git add nome-do-arquivo.extensao;
  * Agora um git commit -m "Mensagem";
  * E por último um git push -u origin trybe-skills-changes;

5. Abrir um Pull Request com uma descrição detalhada:
  * O merge deve ser feito apenas quando chegar no exercício 10.
  
6. Retornar para a branch principal, master, com o comando: git checkout master;

7. Verificar que está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

8. Criar uma nova branch trybe-skills-updates a partir da master e fazer checkout nela;

9. No mesmo arquivo .txt que foi modificado no passo 4, também ao final da sua lista de habilidades, adicionar mais um aprendizado que será desenvolvido nos próximos blocos:
  * Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
  * Fazer um git add nome-do-arquivo.extensao;
  * Agora um git commit -m "Mensagem";
  * e por último um git push -u origin trybe-skills-updates;
  * Abrir um Pull Request com uma descrição amigável:
   * O merge deve ser feito apenas quando chegar no exercício 10;

10. Fazer o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:
  * Ir até a página do primeiro Pull Request (branch trybe-skills-changes) e fazer o merge clicando no botão verde "Merge pull request";
  * Ir até página do outro Pull Request (branch trybe-skills-updates) e tentar fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
  * Resolver esse conflito antes de "mergear" o Pull Request. Clicar no botão "Resolve conflicts", escolher uma das duas versões do texto (lembrar de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema). Depois clicar em "Mark as resolved" e, em seguida, em "Commit merge";
  * Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎
