function timeVencedor() {
    let timeUm = document.getElementById("time1").value
    let golUm = parseInt(document.getElementById("gol1").value)
    let timeDois = document.getElementById("time2").value
    let golDois = parseInt(document.getElementById("gol2").value)
    let vencedor

    if(golUm > golDois) {
        vencedor = timeUm
        document.getElementById("resultado").innerHTML=`o time vencedor foi o ${vencedor} com ${golUm} gol/gols`
    } else if(golDois > golUm) {
        vencedor = timeDois
        document.getElementById("resultado").innerHTML=`o time vencendor foi o ${vencedor} com ${golDois} gol/gols`
    } else {
        vencedor = "Empate"
        document.getElementById("resultado").innerHTML=`o jogo ficou em ${vencedor}`
    }
}
       



// --------------------------------OUTRO JEITO DE FAZER-----------------------------------------------



// document.querySelector('form').addEventListener('submit', function(e){
//   e.preventDefault();
//   var time1 = document.getElementById('time1').value;
//   var gols1 = parseInt(document.getElementById('gols1').value);
//   var time2 = document.getElementById('time2').value;
//   var gols2 = parseInt(document.getElementById('gols2').value);
//   var vencedor = '';

//   if (gols1 > gols2) {
//     vencedor = time1;
//     document.getElementById('resultado').innerHTML = 'O vencedor é: ' + vencedor;
//   } else if (gols2 > gols1) {
//     vencedor = time2;
//     document.getElementById('resultado').innerHTML = 'O vencedor é: ' + vencedor;
//   } else {
//     vencedor = 'EMPATE';
//     document.getElementById('resultado').innerHTML = 'O jogo deu: ' + vencedor;
//   }

// });