let saldo = parseFloat(prompt("Informe o valor inicial: "));
let choice = "";
do {
  choice = prompt(
    "Quantidade de saldo: R$" + saldo + "\nDeseja \n1. Adicionar  \n2. Remover"
  );
  switch (choice) {
    case "1":
      saldo += parseFloat("Informe o valor a ser adicionado: ");
      break;
    case "2":
      saldo -= parseFloat("Informe o valor a ser removido: ");
      break;
    case "3":
      alert("Saindo..." + "\n Seu saldo final foi de: R$" + saldo);
      break;
    default:
      alert("Opção invalida");
  }
} while (choice !== "3");
