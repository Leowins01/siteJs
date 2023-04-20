function verificarVotacao() {
    let anoAtual = document.getElementById("ano_atual").value
    let anoNascimento = document.getElementById("ano_nascimento").value
    let resultado = anoAtual - anoNascimento

    if(resultado >= 16) {
        document.getElementById('resultadinho').innerHTML = "voce pode votar"
    } else {
        document.getElementById('resultadinho'.innerHTML) = "voce nao pode votar"
    }
}

    // if(resultado >= 16) {
    //     alert('pode votar')
    // } else {
    //     alert('nao pode')
    // }
