// 5 - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let number1 = prompt("Inserisci un numero");
let number2 = prompt("Inserisci un numero");
let number3 = prompt("Inserisci un numero");
let number4 = prompt("Inserisci un numero");
let number5 = prompt("Inserisci un numero");
let number6 = prompt("Inserisci un numero");
var numbers = (number1 + number2 + number3 + number4 + number5 + number6);
var numberList = ("")

for (let i = 0; i < numbers.length; i++) {
    if (numbers % 3 === 0) {
        console.log(numberList);
    }
}