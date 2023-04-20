// function ola() {
//     let valor1 = parseFloat(prompt("escreva o 1 numero"))
//     let valor2 = parseFloat(prompt("escreva o 2 numero"))
//     let valor3 = parseFloat(prompt("escreva o 3 numero"))

//     if(valor1 > valor2 > valor3) {
//         alert(`o maior numéro é o ${valor1}`)
//     } else if(valor2 > valor1 > valor3) {
//         alert(`o maior numéro é o ${valor2}`)
//     } else {
//         alert(`o maior numéro é o ${valor3}`)
//     }
// }

//maiorValor.js
function encontrarMaior() {
    let numeroUm = document.getElementById("valor1").value
    let numeroDois = document.getElementById("valor2").value
    let numeroTres = document.getElementById("valor3").value

    let maiorValor

    if(numeroUm > numeroDois && numeroUm > numeroTres) {
        maiorValor = numeroUm
        // document.getElementById("resultado").innerHTML = `O maior numero é o ${numeroUm}`
    } else if(numeroDois > numeroUm && numeroDois > numeroTres) {
        maiorValor = numeroDois
        // document.getElementById("resultado").innerHTML = `O maior numero é o ${numeroDois}`
    } else {
        maiorValor = numeroTres
        // document.getElementById("resultado").innerHTML = `O maior numero é o ${numeroTres}`
    }
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "O maior valor é: " + maiorValor;
}

