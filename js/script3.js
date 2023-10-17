let button = document.querySelector("button");

button.onclick = sorteiaNumeros;
function sorteia() {
  return Math.floor(Math.random() * 60) + 1;
}

function sorteiaNumeros() {
  let megaSena = [];
  let numero = 1;
  let quantidadeMaximaDeNumeros = 6;

  while (numero <= quantidadeMaximaDeNumeros) {
    let numeroSorteados = sorteia();
    let achou = false;

    for (posicao = 0; posicao < megaSena.length; posicao++) {
      if (megaSena[posicao] == numeroSorteados) {
        achou = true;
        break;
      }
    }
    if (achou == false) {
      megaSena.push(numeroSorteados);
      numero++;
    }
  }
  megaSena.sort(function (a, b) {
    return a - b;
  });

  alert("Os númeoros da sorte são: " + megaSena);
}
