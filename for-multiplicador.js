let numero = parseFloat(prompt("Insira o numero a ser multiplicado: "));
let resultado = "";
for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + numero + "x" + fator + "=" + numero * fator + "\n";
}
alert("Resultado da tabuada de " + numero + "\n\n" + resultado);
