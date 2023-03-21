let filaEspera = ["Matheus", "Marcos", "Pedro"];

let escolha = "";
do {
  escolha = prompt(
    "Programa para controle de pacientes" +
      " \nLista de espera: " +
      filaEspera +
      "\nO que você deseja?" +
      "\n1-Novo Paciente" +
      "\n2-Chamar o proximo Paciente" +
      "\n3-Pesquisar Paciente" +
      "\n4-Exibir lista com posições de espera" +
      "\n5-Sair"
  );
  switch (escolha) {
    case "1":
      let novoPaciente = filaEspera.push(
        prompt("Digite o nome do novo paciente: ")
      );
      alert("Paciente adicionado com sucesso!");
      break;
    case "2":
      const primeiroPaciente = filaEspera.shift();
      alert(
        "Próximo paciente: " +
          primeiroPaciente +
          "!! \n Por favor, dirija-se a sala médica"
      );
      break;
    case "3":
      const consultaPaciente = +filaEspera.includes(
        prompt("Digite o nome do paciente para ser pesquisado: ")
      );
      alert(consultaPaciente);
      break;
    case "4":
      let listaEspera = "";
      for (let indice = 0; indice < filaEspera.length; indice++) {
        const elemento = filaEspera[indice];
        listaEspera += `${elemento} se encontra na posição ${indice}\n`;
      }
      alert(listaEspera);
      break;
    case "5":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida, tente novamente!");
  }
} while (escolha !== "5");
