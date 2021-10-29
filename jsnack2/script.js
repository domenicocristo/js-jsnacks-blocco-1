// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// 1. chiedo all'utente le due parole in input
// 2. trovo un modo per sapere quanto è lunga una parola, per poterle confrontare
// 3. stampo la più lunga

let firstWord = prompt("Digita una parola");
let lastWord = prompt("Digita una parola");

if (firstWord.length > lastWord.length) {
  console.log('la parola più lunga della frase è: ' + firstWord + " " + lastWord);
} else {
  console.log('la parola più lunga della frase è: ' + lastWord + " " + firstWord);
}