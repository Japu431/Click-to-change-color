const tela = document.querySelector(".tela");
let inputN1 = document.querySelector("#n1");
let inputN2 = document.querySelector("#n2");

function somar() {
  let valorDoInput1 = Math.floor(inputN1.value);
  let valorDoInput2 = Math.floor(inputN2.value);

  let soma = valorDoInput1 + valorDoInput2;

  tela.innerHTML = `${valorDoInput1} + ${valorDoInput2} = ${soma}`;

  inputN1.value = "";
  inputN2.value = "";
}

function sub() {
  let valorDoInput1 = Math.floor(inputN1.value);
  let valorDoInput2 = Math.floor(inputN2.value);

  let sub = valorDoInput1 - valorDoInput2;

  tela.innerHTML = `${valorDoInput1} - ${valorDoInput2} = ${sub}`;

  inputN1.value = "";
  inputN2.value = "";
}

function multi() {
  let valorDoInput1 = Math.floor(inputN1.value);
  let valorDoInput2 = Math.floor(inputN2.value);

  let multi = valorDoInput1 * valorDoInput2;

  tela.innerHTML = `${valorDoInput1} x ${valorDoInput2} = ${multi}`;

  inputN1.value = "";
  inputN2.value = "";
}

function divisao() {
  let valorDoInput1 = Math.floor(inputN1.value);
  let valorDoInput2 = Math.floor(inputN2.value);

  let divisao = valorDoInput1 / valorDoInput2;

  tela.innerHTML = `${valorDoInput1} ÷ ${valorDoInput2} = ${divisao}`;

  inputN1.value = "";
  inputN2.value = "";
}
