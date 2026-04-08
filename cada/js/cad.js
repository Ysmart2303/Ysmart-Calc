//codigo corrigido pela IA, Sorry não tankei

let alunos = [];

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let matricula = document.getElementById("matricula").value;

    if (!nome || !matricula) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alunos.push({ 
        nome: nome,
        matricula: matricula
    });

    mostrarLista();
    atualizarTotal();
    limparCampos();
}

function mostrarLista() {
    let lista = document.getElementById('listaAlunos');
    lista.innerHTML = "";

    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];

        let item = document.createElement("li");
        item.innerHTML = `
            <strong>${aluno.matricula}</strong> - ${aluno.nome} 
            <span onclick="removerAluno(${i})" class="btn-remove">X</span>
        `;

        lista.appendChild(item);
    }
}

function removerAluno(indice) {
    if (confirm("Tem certeza que deseja remover este aluno?")) {
        alunos.splice(indice, 1);
        mostrarLista();
        atualizarTotal();
    }
}

function atualizarTotal() {
    document.getElementById("totalAlunos").innerText = alunos.length;
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("matricula").value = "";
}

function mostrarEstatisticas() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let com2026 = 0;

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula.startsWith("2026")) {
            com2026++;
        }
    }

    let mensagem = `Total: ${alunos.length} alunos\n`;
    mensagem += `Matrícula 2026: ${com2026}`;

    alert(mensagem);
}