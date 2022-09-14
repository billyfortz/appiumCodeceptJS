module.exports = {

    campos: {
        campoCodigo: '~codigo',
        campoAluno: '~aluno',
        campoSearch: '~search'
    }, 

    botoes: {
      btnSalvar: '~salvar',
      btnCancelar: '~cancelar',
      btnLogout: {
        android: '~logout',
        ios: '(//XCUIElementTypeOther[@name="logout"])[2]'
      }
    },

    textos: {
        txtCodigoJaCadastrado: '~haveCode', 
        txtCamposNaoPreenchidos: {
            android: 'Os campos devem ser preenchidos!',
            ios: '(//XCUIElementTypeStaticText[@name="Os campos devem ser preenchidos!"])'
        },
    },

    alunos: {
        aluno123: '~12323',
        aluno983: '~98839',
        txtAlunoNome123: 'Eduardo Finotti',
        txtAlunoCodigo123: '12323'
    }
}
  