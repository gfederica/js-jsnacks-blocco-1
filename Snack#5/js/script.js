// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.


// creo array vuoto
var numeriDispari = [];

// chiedo di inserire un numero 6 volte, ogni volta controllo se è dispari richiamando la funzione apposita.
// Se il numero è dispari, lo pusho nell'array

for (i = 0; i < 6; i++) {
    var input = parseInt(prompt("Inserisci un numero " + "(" + i + "/6" + ")" ));
    if (check = isOdd(input)) {
        numeriDispari.push(input);
    }
}

console.log(numeriDispari);

// funzione che stabilisce se il numero è dispari
function isOdd (num) {
    if (num % 2 != 0) {
        return true;
    } 
}
