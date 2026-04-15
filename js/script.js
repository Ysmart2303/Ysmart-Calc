function calcular() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let media = (nota1 + nota2 + nota3) / 3;
    let nome = document.getElementById('nome').value;


    let resultado = document.getElementById('resultado');
    resultado.textContent = `Olá, ${nome}! Sua média: ${media.toFixed(1)}`;

    if (media >= 7) {
        resultado.textContent += " - Aprovado!";
    } else if (media >= 5) {
        resultado.textContent += " - Recuperação!";
    } else {
        resultado.textContent += " - Reprovado!";
    }
}

//Calculadora

let historico = [];

function somar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 + n2)
    let calc = `${n1} + ${n2} = ${n3}`;

    if (!n1 || !n2) {   // Verifica se os valores são válidos
        alert("Por favor, insira números válidos.");
        return;
    }

    let  resu = document.getElementById('resultado'); // Obtém o elemento de resultado
    resultado.textContent = ` Resultado da soma é: ${n3}`; // Exibe o resultado da soma

    if (historico.includes(calc)) { // Verifica se o cálculo já existe no histórico
        console.log("O resultado já existe no histórico.");
    } else{ 
        historico.push(calc);
    }
}

function sub() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 - n2)
    let calc = `${n1} - ${n2} = ${n3}`;

    if (!n1 || !n2) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let  resu = document.getElementById('resultado');
    resultado.textContent = ` Resultado da subtração é: ${n3}`;

    if (historico.includes(calc)) {
        console.log("O resultado já existe no histórico.");
    } else{ 
        historico.push(calc);
    }
}

function multi() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 * n2)
    let calc = `${n1} * ${n2} = ${n3}`;


    if (!n1 || !n2) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (historico.includes(calc)) {
        console.log("O resultado já existe no histórico.");
    } else{ 
        historico.push(calc);
    }

    let  resu = document.getElementById('resultado');
    resultado.textContent = ` Resultado da multiplicação é: ${n3}`;
}

function divi() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 / n2)
    let calc = `${n1} ÷ ${n2} = ${n3}`;

    if (!n1 || !n2) {
        alert("Por favor, insira números válidos.");
        return;
    }


    if (historico.includes(calc)) {
        console.log("O resultado já existe no histórico.");
    } else{ 
        historico.push(calc);
    }

    let resultado = document.getElementById('resultado');
    resultado.textContent = ` Resultado da divisão é: ${n3}`;
}

//Historico

function mostrarHistorico() {
    alert("Historico: " + historico.join(" // "));
}

function limparHistorico() {
    historico = [];
    alert("Histórico limpo!");
}

//Limpar resultado

function limparResultado() {
    let resultado = document.getElementById('resultado');
    resultado.textContent = "Resultado:";
}