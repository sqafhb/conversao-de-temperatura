var resultado = document.getElementById("resultado");

function calcularTemperatura(){
    var celsius = parseInt(document.getElementById("celsius").value);
    var calculo = (celsius*1.8)+32; 
    
    resultado.style.color="#5CBF84"
    resultado.innerHTML = `A conversão de ${celsius}ºC é: ${calculo}ºF!`;
}