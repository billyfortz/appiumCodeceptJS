#language: pt

@Aluno
Funcionalidade: Aluno
  Matheus como usuário 
  Gostaria de utilizar as funcionalidades como administrador
  Para criar e verificar alunos através do App

  Contexto:
    Dado que Matheus efetuou o login no appqazando

  @AdicionarAluno
  Cenario: Adicionar aluno
    Quando ele preenher as informações corretamente para adicionar um aluno
    E clicar no botão Salvar
    Entao deve ser apresentado de sucesso informando que o aluno foi cadastrado

  @BuscarAluno
  Cenario: Buscar Aluno
    Quando ele pesquisar pelo nome de um aluno existente no App
    Entao deve ser apresentado o aluno correspondente ao nome inserido

  @AdicionarAlunoCodigoExistente
  Cenario: Tentativa de inserir um aluno com um código já cadastrado
    Quando ele tentar adicionar um aluno com um código já cadastrado
    E clicar no botão Salvar
    Entao deve ser carregado uma mensagem informando que já tem um aluno cadastrado com aquele código

  @AdicionarAlunoSemInformarOCodigo
  Cenario: Tentativa de inserir um aluno sem preencher o campo Código
    Quando ele tentar adicionar um aluno sem informar o código
    E clicar no botão Salvar
    Entao deve ser carregado uma mensagem informando que todos os campos devem ser preenchidos

  @AdicionarAlunoSemInformarONome
  Cenario: Tentativa de inserir um aluno sem preencher o campo Nome
    Quando ele tentar adicionar um aluno sem informar o nome
    E clicar no botão Salvar
    Entao deve ser carregado uma mensagem informando que todos os campos devem ser preenchidos