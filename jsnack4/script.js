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