function calcular() {
    let numero = document.getElementById("numero").value
    
    if(numero == 0) {
        document.getElementById("resultado").innerHTML="o numero é zero"
    } else if(numero > 0) {
        document.getElementById("resultado").innerHTML="o numero é positivo"
    } else {
        document.getElementById("resultado").innerHTML="o numero é negativo"
    }
}