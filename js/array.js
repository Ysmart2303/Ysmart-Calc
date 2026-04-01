let array = [];

//v1 com alertas

/*function adicionar() {
    let inputArray = document.getElementById('inputArray').value;
    array.push(inputArray);

    alert('Elemento adicionado: ' + inputArray);
}

function tamanho() {
    alert('Tamanho do Array: ' + array.length);
}

function verificar() {
    let inputArray = document.getElementById('inputArray').value;
    if (array.includes(inputArray)) {
        alert('Elemento encontrado: ' + inputArray);
    } else {
        alert('Elemento não encontrado: ' + inputArray);
    }
}

function remover() {
    array.pop();
    alert('Último elemento removido');
}

function mostrar() {
    alert('Array atual: ' + array.join(', '));
}*/

//v2 com paragrafos

function adicionar() {
    let inputArray = document.getElementById('inputArray').value;
     if (array.includes(inputArray)) {
        alert('Elemento ja existe: ' + inputArray);
    } else {
        array.push(inputArray);
    document.getElementById("meuParagrafo").textContent = "Elemento adicionado: " + inputArray;
    }
    
}

function tamanho() {
    document.getElementById("meuParagrafo").textContent = "Tamanho do Array: " + array.length;
}

function verificar() {
    let inputArray = document.getElementById('inputArray').value;
    if (array.includes(inputArray)) {
        document.getElementById("meuParagrafo").textContent = "Elemento encontrado: " + inputArray;
    } else {
        document.getElementById("meuParagrafo").textContent = "Elemento não encontrado: " + inputArray;
    }
}

function remover() {
    array.pop();
    document.getElementById("meuParagrafo").textContent = "Último elemento removido";
}

function mostrar() {
    document.getElementById("meuParagrafo").textContent = "Array atual: " + array.join(", ");
}