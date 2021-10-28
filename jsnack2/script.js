// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Digita una parola");
let lastWord = prompt("Digita una parola");
var phrase = (firstWord )+ ( lastWord);
console.log(phrase)
var words = phrase.split("");
var max = words[0];

for(var i = 0; i < words.length; i++) {
  if(words[i].length > max.length ) {
    max = words[i];
  }
}

console.log('la parola più lunga della frase è: ' + max);
