const nome = prompt(
  "olá, esse programa é sobre visitas em diferentes cidades! Poderia informar o seu nome?"
);
let visita = prompt(
  nome +
    " você ja visitou alguma cidade? \nDigite o numero de sua opção:\n1. sim \n2. não "
);
let cidades = "";
let contagem = 0;
while (visita === "1") {
  let cidade = prompt("Qual cidade voce ja visitou?");
  cidades += " - " + cidade + "\n";
  contagem++;
  visita = prompt(
    "Visitou alguma outra cidade? \nDigite o numero de sua opção:\n1. sim \n2. não"
  );
}
alert(nome + " visitou \n" + cidades + " e viajou " + contagem + " vezes");
