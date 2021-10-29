// 5 - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// 1. creo array vuoto
// 2. chiedi 6 volte un numero all'utente
// 3. inserisci nell'array vuoto solo i numeri dispari

const arrayNumbers = [];

for(let i = 0; i < 6; i++) {
    let numbers = prompt("Inserisci un numero");

    if(numbers % 2 !== 0) {
        arrayNumbers.push(numbers);
    }
}

console.log(arrayNumbers);