#language: pt

@Login
Funcionalidade: Login
  Paulo como usuário 
  Gostaria de efetuar o Login
  Para acessar o sistema

  @FazerLogin
  Cenario: Login com sucesso
    Dado que Paulo prencha corretamente seus dados
    Quando ele clicar no botão Entrar
    Entao deve ser carregado a Home do aplicativo

  @FazerLogout
  Cenario: Efetuar logout
    Dado que Matheus efetuou o login no appqazando
    Quando ele clicar no botão Logout
    Entao deve ser apresentado a página de login

  @LoginInvalido
  Cenario: Login inválido
    Dado que Paulo prencha o login com informações inválidas
    Quando ele clicar no botão Entrar
    Entao deve ser carregado uma mensagem informando o erro

  @LoginSemInformarSenha
  Cenario: Login sem informar senha
    Dado que Paulo prencha o login sem informar senha
    Quando ele clicar no botão Entrar
    Entao deve ser carregado uma mensagem informando o erro