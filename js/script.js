function calcular() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    alert("Media é " + ((nota1 + nota2) / 2))
}

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