function calcularMedia() {
    let nota1 = parseInt(document.getElementById("nota1").value);
    let custo
    if (nota1 < 12) {
        custo = nota1 * 1.30
    }
    else {
        custo = nota1 * 1
    }
    

    document.getElementById("resultado").innerHTML = (`O custo das maças é de: R$${custo.toFixed(2)} `);
    }

    //.toFixed(2) para arredondar um número com duas casas decimais

/*let numero
 = prompt('digite o número de maçãs compradas')
let custo
if (numero < 12) {
    custo = numero * 1.30
    alert(`O custo de ${numero} maçãs é de ${custo} reais`)
}
else {
    custo = numero * 1.00;
    alert(`O custo de ${numero} maçãs é de ${custo} reais`)
    }*/
    
    

/*function calcularCusto() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let custo;
    if (quantidade < 12) {
    custo = quantidade * 1.30;
    } else {
    custo = quantidade * 1.00;
    }
    document.getElementById("resultado").value = custo.toFixed(2);
    }*/ 