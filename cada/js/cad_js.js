let aluno = []

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let matricula = document.getElementById("matricula").value;

    // Validação simples para garantir que os campos não estejam vazios

    if (!nome || !matricula) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    aluno.push({ 
        aluno: aluno, 
        matricula: matricula });

    mostrarLista();
    atualizarLista();
    limparCampos();

}