let resultado = document.querySelector('.resultado');
let operadorSelecionado;
let valor1 = '';
let valor2 = '';

document.getElementById('ac').addEventListener('click', botaoAcClicado);
document
  .getElementById('positivo-negativo')
  .addEventListener('click', inverterSinalNumero);
document
  .getElementById('porcentagem')
  .addEventListener('click', converterEmPorcentagem);
document
  .getElementById('virgula')
  .addEventListener('click', botaoVirgulaClicado);

document.getElementById('zero').addEventListener('click', botaoNumeroClicado);
document.getElementById('um').addEventListener('click', botaoNumeroClicado);
document.getElementById('dois').addEventListener('click', botaoNumeroClicado);
document.getElementById('tres').addEventListener('click', botaoNumeroClicado);
document.getElementById('quatro').addEventListener('click', botaoNumeroClicado);
document.getElementById('cinco').addEventListener('click', botaoNumeroClicado);
document.getElementById('seis').addEventListener('click', botaoNumeroClicado);
document.getElementById('sete').addEventListener('click', botaoNumeroClicado);
document.getElementById('oito').addEventListener('click', botaoNumeroClicado);
document.getElementById('nove').addEventListener('click', botaoNumeroClicado);

document
  .getElementById('igual')
  .addEventListener('click', realizarOperacaoIgual);
document
  .getElementById('divisao')
  .addEventListener('click', botaoOperacaoClicado);
document
  .getElementById('multiplicacao')
  .addEventListener('click', botaoOperacaoClicado);
document
  .getElementById('subtracao')
  .addEventListener('click', botaoOperacaoClicado);
document
  .getElementById('adicao')
  .addEventListener('click', botaoOperacaoClicado);

function botaoAcClicado() {
  resultado.textContent = '0';
  operadorSelecionado = undefined;
  valor1 = '';
  valor2 = '';
}

function botaoNumeroClicado() {
  if (resultado.textContent.length >= 9 && this.textContent !== '.') return;
  if (resultado.textContent === '0' || (operadorSelecionado && valor2 === '')) {
    updateDisplay(this.textContent);
    if (operadorSelecionado) {
      valor2 = this.textContent;
    } else {
      valor1 = this.textContent;
    }
  } else {
    updateDisplay(resultado.textContent + this.textContent);
    if (operadorSelecionado) {
      valor2 += this.textContent;
    } else {
      valor1 += this.textContent;
    }
  }
}

function botaoVirgulaClicado() {
  if (!resultado.textContent.includes(',')) {
    resultado.textContent += this.textContent;
  }
}

function operacao(v1, operador, v2) {
  switch (operador) {
    case 'x':
      return v1 * v2;
    case '÷':
      if (v2 !== 0) {
        return v1 / v2;
      } else {
        alert('Divisão por zero não é permitida');
        return v1;
      }
    case '+':
      return v1 + v2;
    case '-':
      return v1 - v2;
    default:
      return v1;
  }
}

function realizarOperacaoIgual() {
  if (valor1 !== '' && operadorSelecionado !== undefined && valor2 !== '') {
    valor1 = operacao(
      parseFloat(valor1.replace(',', '.')),
      operadorSelecionado,
      parseFloat(valor2.replace(',', '.'))
    )
      .toString()
      .replace('.', ',');
    updateDisplay(valor1);
    valor2 = '';
    operadorSelecionado = undefined;
  }
}

function botaoOperacaoClicado() {
  if (valor1 !== '' && valor2 !== '') {
    valor1 = operacao(
      parseFloat(valor1.replace(',', '.')),
      operadorSelecionado,
      parseFloat(valor2.replace(',', '.'))
    )
      .toString()
      .replace('.', ',');
    updateDisplay(valor1);
  }
  operadorSelecionado = this.textContent;
  valor2 = '';
}

function inverterSinalNumero() {
  if (resultado.textContent !== '0') {
    if (valor2 === '') {
      valor1 = (parseFloat(valor1.replace(',', '.')) * -1)
        .toString()
        .replace('.', ',');
      resultado.textContent = valor1;
    } else {
      valor2 = (parseFloat(valor2.replace(',', '.')) * -1)
        .toString()
        .replace('.', ',');
      resultado.textContent = valor2;
    }
  }
}

function converterEmPorcentagem() {
  if (resultado.textContent != '0') {
    resultado.textContent = (
      parseFloat(resultado.textContent.replace(',', '.')) / 100
    )
      .toString()
      .replace('.', ',');
  }
}

function updateDisplay(text) {
  if (text.includes(',')) {
    let [whole, fractional] = text.split(',');
    if (whole.length + fractional.length > 8) {
      fractional = parseFloat('0.' + fractional)
        .toFixed(8 - whole.length - 1)
        .split('.')[1];
      resultado.textContent = whole + ',' + fractional;
    } else {
      resultado.textContent = text;
    }
  } else {
    resultado.textContent = text;
  }
}
