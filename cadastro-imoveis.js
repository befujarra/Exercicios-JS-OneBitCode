let escolha = "";
let imoveisCadastrados = [];

do {
  escolha = prompt(
    "Programa para gerenciamento de imoveis! \n" +
      "Quantidade de imoveis cadastrados: " +
      imoveisCadastrados.length +
      "\n" +
      "1- Salvar novo imovel \n" +
      "2- Mostrar Imoveis cadastrados \n" +
      "3- Sair"
  );
  switch (escolha) {
    case "1":
      //variavel fica dentro do switch pra ser criada uma nova a cada loop, e nao editar o array
      const novoImovel = {};
      novoImovel.dono = prompt("Digite o nome do proprietario:");
      novoImovel.quartos = prompt("Digite a quantidade de quartos:");
      novoImovel.banheiros = prompt("Digite a quantidade de banheiros:");
      novoImovel.garagem = prompt("Possui garagem?");
      //os objetos precisam ser destrichados para ser exibidos
      const confirmacao = confirm(
        "Salvar este imovel?\n" +
          "\nProprietario: " +
          novoImovel.dono +
          "\nQuartos: " +
          novoImovel.quartos +
          "\nBanheiros: " +
          novoImovel.banheiros +
          "\nPossui Garagem? " +
          novoImovel.garagem
      );
      // condicional if else para confirmação de cadastro do imovel
      if (confirmacao) {
        //se ele confirmar, adiciona o objeto ao final do array
        imoveisCadastrados.push(novoImovel);
      } else {
        alert("Voltando ao menu...");
      }

      break;
    case "2":
      //iterar o array pra poder mostar os indices separados, e mostrando o que tem dentro do objeto
      for (let i = 0; i < imoveisCadastrados.length; i++) {
        alert(
          "Imovel" +
            (i + 1) +
            "\nProprietario: " +
            imoveisCadastrados[i].dono +
            "\nQuartos: " +
            imoveisCadastrados[i].quartos +
            "\nBanheiros: " +
            imoveisCadastrados[i].banheiros +
            "\nPossui garagem? " +
            imoveisCadastrados[i].garagem
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (escolha !== "3");
