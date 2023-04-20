// function somarValores() {
//     let numberOne = document.getElementById("valor1")
//     let numberTwo = document.getElementById("valor2")
//     let numberThree = document.getElementById("valor3")
//     let somaValor
    
//     if(numberOne > numberTwo && numberTwo > numberThree) {
//         maiorValor1 = numberOne
//         maiorValor2 = numberTwo
//         somaValor = numberOne + numberTwo



//     } else if(numberOne > numberTwo && numberThree > numberTwo) {
//         maiorValor1 = numberOne
//         maiorValor2 = numberThree
//         somaValor = numberOne + numberThree



//     } else if(numberTwo > numberThree && numberOne > numberThree) {
//         maiorValor1 = numberTwo
//         maiorValor2 = numberOne
//         somaValor = numberTwo + numberOne



//     } else if(numberTwo > numberOne && numberThree > numberOne){
//         maiorValor1 = numberTwo
//         maiorValor2 = numberThree
//         somaValor = numberTwo + numberThree



//     } else if(numberThree > numberTwo && numberOne > numberTwo) {
//         maiorValor1 = numberThree
//         maiorValor2 = numberOne
//         somaValor = numberThree + numberOne



//     } else {
//         maiorValor1 = numberThree
//         maiorValor2 = numberTwo
//         somaValor = numberThree + numberTwo
//     }

//     let result
//     result = document.getElementById("resultado").innerHTML=`Os maios numeros são ${maiorValor1} e ${maiorValor2}, e a soma dos dois números é ${somaValor}`
// }

function somarDoisMaiores() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);

    var soma = valor1 + valor2 + valor3 - Math.min(valor1, valor2, valor3); // soma dos 2 maiores
    
    document.getElementById("resultado").innerHTML = "A soma dos 2 maiores valores é: " + soma;
}