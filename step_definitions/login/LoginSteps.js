const { LoginActions } = require("../../page_definitions/page_actions/LoginActions");
const { YmlHelper } = require("../../utils/YmlHelper");

const { I } = inject();
const loginActions = new LoginActions(); 
const yaml = new YmlHelper(); 

Given('que Paulo prencha corretamente seus dados', async() => {
  const config = await yaml.readYml(); 
  const { email, senha } = config.login; 
  await loginActions.preencherEmail(email)
  await loginActions.preencherSenha(senha)
});

Given('que Matheus efetuou o login no appqazando', async() => {
  const config = await yaml.readYml(); 
  const { email, senha } = config.login; 
  await loginActions.preencherEmail(email)
  await loginActions.preencherSenha(senha)

  await loginActions.selecionarOpcaoEntrar(); 
  await loginActions.esperaHomeCarregar(); 
});

Given('que Paulo prencha o login com informações inválidas', async() => {
  const config = await yaml.readYml(); 
  const { email, senha } = config.loginInvalido; 
  await loginActions.preencherEmail(email)
  await loginActions.preencherSenha(senha)
});

Given('que Paulo prencha o login sem informar senha', async() => {
  const config = await yaml.readYml(); 
  const { email, senha } = config.loginSemInformarSenha; 
  await loginActions.preencherEmail(email)
  await loginActions.preencherSenha(senha)
});

When('ele clicar no botão Entrar', async() => {
  await loginActions.selecionarOpcaoEntrar(); 
});

When('ele clicar no botão Logout', async() => {
  await loginActions.efetuarLogout(); 
});

Then('deve ser carregado a Home do aplicativo', async() => {
  await loginActions.esperaHomeCarregar(); 
});

Then('deve ser carregado uma mensagem informando o erro', async() => {
  await loginActions.validarErroLogin(); 
});

Then('deve ser apresentado a página de login', async() => {
  await loginActions.validarLogout(); 
});