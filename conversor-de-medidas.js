const valorMetros = prompt("Insira o valor em Metros:");
const escolha = prompt(
  "Qual será a unidade escolhida para conversão: \nMilímetro \nCentímetro \nDecímetro \nDecâmetro \nHectômetro \nQuilômetro"
);

switch (escolha) {
  case ("milimetro",
  "milimetros",
  "milímetro",
  "milímetros",
  "Milimetro",
  "Milimetros",
  "Milímetro",
  "Milímetros"):
    alert(
      "o resultado é:\n" + valorMetros * (10 * 10 * 10) + " Milímetros(mm)"
    );
    break;
  case ("centimetro",
  "centimetros",
  "centímetro",
  "centímetros",
  "Centimetro",
  "Centimetros",
  "Centímetro",
  "Centímetros"):
    alert("o resultado é:\n" + valorMetros * (10 * 10) + " Centímetros(cm)");
    break;
  case "decimetro":
    alert("o resultado é:\n" + valorMetros * 10 + " Decímetros(dm)");
    break;
  case "decametro":
    alert("o resultado é:\n" + valorMetros / 10 + " Decâmetros(dam)");
    break;
  case "hectometro":
    alert("o resultado é:\n" + valorMetros / 100 + " Hectômetros(hm)");
    break;
  case "quilometro":
    alert("o resultado é:\n" + valorMetros / 1000 + " Quilômetros(km)");
    break;
  default:
    alert("Opção inválida, tente novamente!");
}
