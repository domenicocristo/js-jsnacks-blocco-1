// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// 1. chiedo 10 volte all'utente di inserire un numero
// 2. trovo un modo di fare la somma dei numeri inseriti
// 3. stampo la somma

const numbers = [];
let sum = 0;

for (i = 0; i < 10; i++) {
    let askNumbers = parseInt(prompt("Inserisci un numero"));
    numbers.push(askNumbers);
    sum += numbers[i];
}

console.log(sum);