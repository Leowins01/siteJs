function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    
    let mediaFinal = (nota1 + nota2 ) / 2;

    if (mediaFinal >=6){
        document.getElementById("resultado").innerHTML = (`O aluno foi aprovado com a média ${mediaFinal.toFixed(1)}`);
    }
    else {
        document.getElementById("resultado").innerHTML = (`O aluno foi reprovado com a média ${mediaFinal.toFixed(1)}`);
    }

    }
/*
let nota1
 nota1 = parseFloat(prompt('digite o valor da primeira nota'))
let nota2
nota2 = parseFloat(prompt(`digite o valor da segunda nota`))
let media
media = (nota1 + nota2) / 2

if (media < 6) {
    alert(`aluno reprovado com a nota ${media.toFixed(1)}`)
}
else {
    alert(`aluno aprovado com a nota ${media.toFixed(1)}`)
    }*/
    //.toFixed(2) para arredondar um número com duas casas decimais
    