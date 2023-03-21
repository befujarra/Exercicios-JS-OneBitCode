const atacante = prompt("Insira o nome do Atacante");
const poderAtq = prompt("Qual será o poder de Ataque do personagem?");

const defensor = prompt("Insira o nome do Defensor");
const qtdVida = prompt("Qual é a quantidade de vida de " + defensor);
const poderDef = prompt("E o poder de defesa?");
const escudo = prompt("Ele ira posuir um escudo?");

if (poderAtq > poderDef && escudo !== "sim") {
  document.write(
    "o dano causado" +
      "por " +
      " " +
      atacante +
      "será: " +
      " " +
      (poderAtq - poderDef) +
      " " +
      defensor +
      " " +
      "agora tem: " +
      (qtdVida - (poderAtq - poderDef)) +
      " de vida"
  );
} else if (poderAtq > poderDef && escudo === "sim") {
  document.write(
    "o dano causado" +
      " " +
      "por" +
      " " +
      atacante +
      " " +
      " será:" +
      " " +
      (poderAtq - poderDef) / 2 +
      " " +
      defensor +
      " " +
      "agora tem: " +
      (qtdVida - (poderAtq - poderDef) / 2) +
      " de vida"
  );
} else if (poderAtq <= poderDef) {
  document.write(
    "dano causado igual 0" +
      " " +
      defensor +
      " " +
      " continua com" +
      " " +
      qtdVida +
      " " +
      "de vida"
  );
}
