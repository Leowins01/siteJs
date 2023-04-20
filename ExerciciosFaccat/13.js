function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    
    let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    document.getElementById("resultado").innerHTML = (`A média final é: "${mediaFinal.toFixed(2)}" `);
    }

    //.toFixed(2) para arredondar um número com duas casas decimais