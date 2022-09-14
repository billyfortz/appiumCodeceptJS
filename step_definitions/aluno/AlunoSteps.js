const { AlunoActions } = require("../../page_definitions/page_actions/AlunoActions");

const { I } = inject();
const alunoActions = new AlunoActions(); 

When('ele preenher as informações corretamente para adicionar um aluno', async() => {
    await alunoActions.adicionarAluno(); 
});

When('clicar no botão Salvar', async() => {
    await alunoActions.clicarSalvarAluno(); 
});

When('ele pesquisar pelo nome de um aluno existente no App', async() => {
    await alunoActions.buscarAluno(); 
});

When('ele tentar adicionar um aluno com um código já cadastrado', async() => {
    await alunoActions.inserirAlunoCadastrado(); 
});

When('ele tentar adicionar um aluno sem informar o código', async() => {
    await alunoActions.inserirAlunoSemInformarCodigo(); 
});

When('ele tentar adicionar um aluno sem informar o nome', async() => {
    await alunoActions.inserirAlunoSemInformarNome(); 
});

Then('deve ser apresentado de sucesso informando que o aluno foi cadastrado', async() => {
    await alunoActions.validarSalvarAluno(); 
});

Then('deve ser apresentado o aluno correspondente ao nome inserido', async() => {
    await alunoActions.validaBuscarAluno(); 
});

Then('deve ser carregado uma mensagem informando que já tem um aluno cadastrado com aquele código', async() => {
    await alunoActions.validarErroCodigoJaCadastrado(); 
});

Then('deve ser carregado uma mensagem informando que todos os campos devem ser preenchidos', async() => {
    await alunoActions.validarErroPreencherTodosCampos(); 
});