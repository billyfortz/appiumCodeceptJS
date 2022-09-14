const pageHome = require("../page_objects/home/pageHome")
const codeHelper = require('../../utils/CodeHelper')

const { I } = inject();
const codigoGerado = codeHelper.getCode(); 

class AlunoActions {

  async adicionarAluno() {
    const campoCodigo = pageHome.campos.campoCodigo;
    I.waitForElement(campoCodigo, 10);
    I.fillField(campoCodigo, codigoGerado);  

    const campoAluno = pageHome.campos.campoAluno;
    I.waitForElement(campoAluno, 10);
    I.fillField(campoAluno, 'Matheus');  
  }

  async buscarAluno() {
    const campoSearch = pageHome.campos.campoSearch; 
    I.waitForElement(campoSearch, 10); 
    I.fillField(campoSearch, pageHome.alunos.txtAlunoNome123); 
  }

  async inserirAlunoCadastrado() {
    const campoCodigo = pageHome.campos.campoCodigo;
    I.waitForElement(campoCodigo, 10);
    I.fillField(campoCodigo, pageHome.alunos.txtAlunoCodigo123);  

    const campoAluno = pageHome.campos.campoAluno;
    I.waitForElement(campoAluno, 10);
    I.fillField(campoAluno, 'Felipe Oliveira');  
  }

  async inserirAlunoSemInformarCodigo() {
    const campoAluno = pageHome.campos.campoAluno;
    I.waitForElement(campoAluno, 10);
    I.fillField(campoAluno, 'Felipe Oliveira');  
  }

  async inserirAlunoSemInformarNome() {
    const campoCodigo = pageHome.campos.campoCodigo;
    I.waitForElement(campoCodigo, 10);
    I.fillField(campoCodigo, pageHome.alunos.txtAlunoCodigo123);  
  }

  async clicarSalvarAluno() {
    const btnSalvar = pageHome.botoes.btnSalvar;
    I.waitForElement(btnSalvar, 10);
    I.tap(btnSalvar); 
  }

  async validarSalvarAluno() {
    const campoSearch = pageHome.campos.campoSearch
    I.fillField(campoSearch, 'Matheus');
    
    I.runOnIOS(() => {
      I.seeElement('(//XCUIElementTypeOther[@name="' + codigoGerado + '"])[2]')
    })

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="' + codigoGerado + '"]/android.widget.TextView')
    })
  }
  
  async validaBuscarAluno() {
    I.see(pageHome.alunos.txtAlunoCodigo123); 
    I.dontSee(pageHome.alunos.aluno983); 
  }

  async validarErroCodigoJaCadastrado() {
    I.wait(2); 
    I.seeElement(pageHome.textos.txtCodigoJaCadastrado); 
  }

  async validarErroPreencherTodosCampos() {
  I.runOnIOS(() => {
    I.wait(2); 
    I.seeElement(pageHome.textos.txtCamposNaoPreenchidos); 
  })

  I.runOnAndroid(() => {
    I.wait(2); 
    I.seeElement(pageHome.textos.txtCamposNaoPreenchidos);
  })
  }
}

module.exports = {
    AlunoActions
  };