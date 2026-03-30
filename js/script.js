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

function somar() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    alert("Soma é " + (nota1 + nota2))
}

function sub() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    alert("Subtração é " + (nota1 - nota2))
}

function multi() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    alert("Multiplicação é " + (nota1 * nota2))
}

function divi() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    alert("Divisão é " + (nota1 / nota2))
}