// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// 1. creo un array 
// 2. genero un numero
// 3. se il numero non è uguale a quelli già presenti lo inserisco nell'array
// 4. stampo la lista


const numberList = [];

while (numberList.length < 50) {
    const num = Math.floor(Math.random() * 50) + 1;
    let duplicateNum = false;

    for (i = 0; i < numberList.length; i++) {
        if (num === numberList[i]) {
            duplicateNum = true;
        }
    }

    if (duplicateNum == false) {
        numberList.push(num);
    }
}

console.log("Lista di numeri da 1 a 50 misti: ", numberList);