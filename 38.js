function senha() {
    let senhaTentativa = document.getElementById("codigo").value
    let senhaCorreta = 9999

    if(senhaTentativa != senhaCorreta) {
        document.getElementById("resultado").innerHTML=`Acesso negado`
    } else {
        document.getElementById("resultado").innerHTML=`Acesso permitido`
    }
}