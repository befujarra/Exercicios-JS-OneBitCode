const word = prompt("Insira uma palavra: ");
let wordReverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordReverse += word[i];
}
if (word === wordReverse) {
  alert(word + " é um palindromo");
} else {
  alert(word + " não é um palindromo\n\n " + word + "!==" + wordReverse);
}
