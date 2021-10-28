// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let userName = prompt("Qual'è il tuo nome?");
const validNames = ["pippo", "pluto", "paperino"];
let namevalidator = false;

for (let i = 0; i < validNames.length; i++) {
    if (userName == validNames[i]) {
        namevalidator = true;
    }
}

if (namevalidator === true) {
    console.log("Il tuo nome è nella lista!");
} else {
    console.log("Il tuo nome non è nella lista!");
}