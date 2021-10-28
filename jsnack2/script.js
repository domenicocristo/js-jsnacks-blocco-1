let firstWord = prompt("Digita una parola");
let lastWord = prompt("Digita una parola");
const words = [firstWord, lastWord];
let max = words[i];

for (let i = 0; i < words.length; i++) {
	if (words[i] > max) {
		max = words[i];
	}
}

console.log('La parola più lunga è: '+max)
