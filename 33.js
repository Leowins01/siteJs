function calcular() {
    let numberOne = document.getElementById("valor1").value
    let numberTwo = document.getElementById("valor2").value

    if(numberOne === numberTwo) {
        document.getElementById("resultado").innerHTML=`Os números são iguais`
    } else if(numberOne > numberTwo) {
        document.getElementById("resultado").innerHTML=`O primeiro é maior`
    } else {
        document.getElementById("resultado").innerHTML=`O segundo é maior`
    }
}


// --------------------------------OUTRO JEITO DE FAZER-----------------------------------------------


// function comparar() {
//   let valor1 = Number(document.getElementById("valor1").value);
//   let valor2 = Number(document.getElementById("valor2").value);
//   let resultado = document.getElementById("resultado");
  
//   if (valor1 === valor2) {
//     resultado.innerHTML = "Números iguais";
//   } else if (valor1 > valor2) {
//     resultado.innerHTML = "Primeiro é maior";
//   } else {
//     resultado.innerHTML = "Segundo é maior";
//   }
// } 

// Explicação:

// - No HTML, criamos dois campos de entrada de números (input type="number"), um botão para iniciar a comparação e um parágrafo para exibir o resultado.
// - Chamamos o arquivo JavaScript "comparacao.js" com a tag <script>.
// - No JavaScript, criamos a função "comparar", que utiliza a propriedade "value" dos elementos HTML "valor1" e "valor2" para obter os valores digitados pelo usuário, converte esses valores para números com a função Number() e armazena em duas variáveis. Também utilizamos a propriedade "innerHTML" do elemento HTML "resultado" para exibir a mensagem correspondente à comparação feita com os valores.
// - Utilizamos a estrutura condicional if/else if/else para comparar os valores. Se os valores forem iguais, exibimos a mensagem "Números iguais". Se o primeiro valor for maior que o segundo, exibimos a mensagem "Primeiro é maior", caso contrário, exibimos a mensagem "Segundo é maior".