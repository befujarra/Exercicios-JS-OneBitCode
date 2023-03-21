const veiculo1 = prompt("Insira o nome do primeiro veiculo");
const velocidade1 = prompt("Insira a velocidade do primeiro veiculo");

const veiculo2 = prompt("Insira o nome do segundo veiculo");
const velocidade2 = prompt("Insira a velocidade do segundo veiculo");

if (velocidade1 > velocidade2) {
  document.write("o " + veiculo1 + " é mais rapido do que o " + veiculo2);
} else if (velocidade1 < velocidade2) {
  document.write("o " + veiculo2 + " é mais rapido do que o " + veiculo1);
} else if (velocidade1 === velocidade2) {
  document.write(
    "As velocidades de" + veiculo1 + " " + veiculo2 + "são iguais"
  );
}
