function fazerConta() {
    let valorUm = document.getElementById("valor_um").value
    let valorDois = document.getElementById("valor_dois").value

    if(valorUm > valorDois) {
        document.getElementById('resultado').innerHTML = `o valor ${valorUm} é maior que o ${valorDois}`
    } else {
        document.getElementById('resultado').innerHTML = `o valor ${valorDois} é maior que o ${valorUm}`
    }
}