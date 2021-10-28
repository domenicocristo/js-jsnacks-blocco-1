// 1 - L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Chiedo all'utente 2 numeri
let firstNumber = prompt("Digita un numero");
let lastNumber = prompt("Digita un numero");

// Creo una funzione che mi restituisca il numero maggiore
if (firstNumber < lastNumber) {
    console.log(lastNumber);
} else {
    console.log(firstNumber)
}