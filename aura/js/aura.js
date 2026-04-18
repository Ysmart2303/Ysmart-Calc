function gerarAura() {
    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const tipo = document
        .querySelector('input[placeholder="Sigma ou Beta"]')
        .value.toLowerCase();

    if (tipo === "sigma") {
        alert(`A aura de ${nome} é Sigma!`);
    } else if (tipo === "beta") {
        alert(`A aura de ${nome} é Beta!`);
    } else {
        alert('Por favor, insira "Sigma" ou "Beta" para o tipo de aura.');
    }
}
