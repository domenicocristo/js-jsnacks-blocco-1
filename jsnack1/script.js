// 1 - L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


// 1.Chiedo all'utente 2 numeri
// 2.Creo una funzione che mi restituisca il numero maggiore

let firstNumber = prompt("Digita un numero");
let lastNumber = prompt("Digita un numero");

// Creo una funzione che mi restituisca il numero maggiore
if (firstNumber < lastNumber) {
    console.log("Il numero maggiore è: ", lastNumber);
} else {
    console.log("Il numero maggiore è: ", firstNumber)
}

console.log("Primo numero: ", firstNumber);
console.log("Secondo numero: ", lastNumber);