let resultado = document.querySelector(".resultado");
let isOperadorClicado = false;
let contadorOperadorClicado=0;
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
document.getElementById("igual").addEventListener("click", realizarOperacaoIgual)
document.getElementById("divisao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("multiplicacao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("subtracao").addEventListener("click", botaoOperacaoClicado);
document.getElementById("adicao").addEventListener("click", botaoOperacaoClicado);

function botaoAcClicado(){
  resultado.textContent = "0";
  operadorSelecionado = undefined;
  isOperadorClicado = false;
  valor = 0;
  valorFinal = undefined;
}

function botaoNumeroClicado() {
  if (this.textContent == "," && resultado.textContent.includes(",")) return;
  if (resultado.textContent == "0" || isOperadorClicado) {
    resultado.textContent = this.textContent;
    isOperadorClicado = false;
  } else {
    resultado.textContent += this.textContent;
  }
  isOperadorClicado=false;
}

function operacao(){
  if(operadorSelecionado=="x") operadorSelecionado="*";
  if(operadorSelecionado=="÷") operadorSelecionado="/";
  if(operadorSelecionado==undefined) return;
  valorFinal = eval(
    parseFloat(valor) +
      operadorSelecionado +
      parseFloat(resultado.textContent.replace(",", "."))
  );
  resultado.textContent = valorFinal;
  resultado.textContent=resultado.textContent.replace(".", ",");
  valorFinal = 0;
}

function realizarOperacaoIgual() {  
  operacao();
  operadorSelecionado = undefined;
  isOperadorClicado=false;
  contadorOperadorClicado=0;
}

function botaoOperacaoClicado(){
  isOperadorClicado=true;
  contadorOperadorClicado++;
  if(contadorOperadorClicado>1){
    operacao();
  }
  valor=parseFloat(resultado.textContent.replace(",", "."));
  operadorSelecionado=this.textContent;  
}

function inverterSinalNumero(){
  if(resultado.textContent=="0") return;
  if(!resultado.textContent.includes("-")){
    resultado.textContent="-"+resultado.textContent
  }else{
    resultado.textContent=resultado.textContent.replace("-","");
  }
}

function converterEmPorcentagem(){
  if(resultado.textContent=="0") return;
  resultado.textContent=parseFloat(resultado.textContent.replace("-",""))/100;
  
}






