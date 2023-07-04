let resultado = document.querySelector(".resultado");
let operadorSelecionado;
let valor;
let valorFinal;

document.getElementById("ac").addEventListener("click", botaoAcClicado);
document.getElementById("positivo-negativo").addEventListener("click", inverterSinalNumero);
document.getElementById("porcentagem").addEventListener("click", converterEmPorcentagem);
document.getElementById("virgula").addEventListener("click", botaoNumeroClicado);
document.getElementById("zero").addEventListener("click", botaoNumeroClicado);
document.getElementById("um").addEventListener("click", botaoNumeroClicado);
document.getElementById("dois").addEventListener("click", botaoNumeroClicado);
document.getElementById("tres").addEventListener("click", botaoNumeroClicado);
document.getElementById("quatro").addEventListener("click", botaoNumeroClicado);
document.getElementById("cinco").addEventListener("click", botaoNumeroClicado);
document.getElementById("seis").addEventListener("click", botaoNumeroClicado);
document.getElementById("sete").addEventListener("click", botaoNumeroClicado);
document.getElementById("oito").addEventListener("click", botaoNumeroClicado);
document.getElementById("nove").addEventListener("click", botaoNumeroClicado);
document.getElementById("igual").addEventListener("click", realizarOperacaoIgual);
document.getElementById("divisao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("multiplicacao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("subtracao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("adicao").addEventListener("click", botaoOperacaoClicado);

function botaoAcClicado(){
  resultado.textContent = "0";
  operadorSelecionado = undefined;
  valor = 0;
  valorFinal = undefined;
}

function botaoNumeroClicado() {
  if (this.textContent == "," && resultado.textContent.includes(",")) return;
  if (resultado.textContent == "0" || operadorSelecionado) {
    resultado.textContent = this.textContent;
    operadorSelecionado = false;
  } else {
    resultado.textContent += this.textContent;
  }
}

function operacao(valor1, operador, valor2){
  switch (operador) {
    case "x":
      return valor1 * valor2;
    case "÷":
      if (valor2 !== 0) {
        return valor1 / valor2;
      } else {
        alert('Divisão por zero não é permitida');
        return valor1;
      }
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    default:
      return valor1;
  }
}

function realizarOperacaoIgual() {  
  if (operadorSelecionado) {
    valorFinal = operacao(parseFloat(valor), operadorSelecionado, parseFloat(resultado.textContent.replace(",", ".")));
    resultado.textContent = valorFinal.toString().replace(".", ",");
    operadorSelecionado = undefined;
  }
}

function botaoOperacaoClicado(){
  if (operadorSelecionado) {
    valorFinal = operacao(parseFloat(valor), operadorSelecionado, parseFloat(resultado.textContent.replace(",", ".")));
    resultado.textContent = valorFinal.toString().replace(".", ",");
  }
  valor = parseFloat(resultado.textContent.replace(",", "."));
  operadorSelecionado = this.textContent;  
}

function inverterSinalNumero(){
  if(resultado.textContent!="0"){
    resultado.textContent = (parseFloat(resultado.textContent.replace(",", ".")) * -1).toString().replace(".", ",");
  }
}

function converterEmPorcentagem(){
  if(resultado.textContent!="0"){
    resultado.textContent = (parseFloat(resultado.textContent.replace(",", ".")) / 100).toString().replace(".", ",");
  }
}
