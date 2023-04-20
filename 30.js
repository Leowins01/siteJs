function ordenar() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let valor3 = document.getElementById("valor3").value;
    
    let numeros = [valor1, valor2, valor3];
    numeros.sort((a, b) => a - b);
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = numeros.join(", ");
  }