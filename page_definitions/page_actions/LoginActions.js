const pageLogin = require("../page_objects/login/pageLogin")
const pageHome = require("../page_objects/home/pageHome")

const { I } = inject();

class LoginActions {

    async esperaHomeCarregar() {
        await I.waitForElement(pageHome.campos.campoCodigo, 10);
        await I.waitForElement(pageHome.campos.campoAluno, 10);
        await I.waitForElement(pageHome.campos.campoSearch, 10);
    }

    async preencherEmail(email) {
        const campoEmail = pageLogin.campos.campoEmail;
        I.waitForElement(campoEmail, 20);
        I.fillField(campoEmail, email);  
    }

    async preencherSenha(senha) {
        const campoSenha = pageLogin.campos.campoSenha;
        I.waitForElement(campoSenha, 20);
        I.fillField(campoSenha, senha);  
    }

    async selecionarOpcaoEntrar() {
        const btnEntrar = pageLogin.botoes.btnEntrar;
        I.waitForElement(btnEntrar, 20);
        I.tap(btnEntrar);  
    }

    async efetuarLogout() {
        await I.waitForElement(pageHome.botoes.btnLogout, 10);
        I.tap(pageHome.botoes.btnLogout);
    }

    async validarErroLogin() {
        await I.waitForElement(pageLogin.textos.txtErroLogin, 10);
    }

    async validarLogout() {
        await I.waitForElement(pageLogin.campos.campoEmail, 10);
        await I.waitForElement(pageLogin.campos.campoSenha, 10);
        await I.waitForElement(pageLogin.botoes.btnEntrar, 10);
    }
}

module.exports = {
    LoginActions
  };