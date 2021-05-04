// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// scriviamo un array con i nomi
var nome = ["Federica", "Francesco", "Roberta", "Luisa", "Paolo", "Gianni", "Claudia", "Teodoro"];

// scriviamo un array con i cognomi
var cognome = ["Giudice", "Zago", "Antoni", "DiNatale", "Bertino", "Bianchi", "Incardona", "Brafa", "DiMartino", "Neri"];

 
// definisco la funzione che mi genera una volta il nome e cognome
function invitatoRandom (nome, cognome) {
    var nomeRandom = nome[Math.floor(Math.random() * nome.length)];
    var cognomeRandom = cognome[Math.floor(Math.random() * cognome.length)];
    return nomeRandom + " " + cognomeRandom;
}


// chiamo la funzione
var invitatoRandom = invitatoRandom(nome, cognome);
console.log(invitatoRandom);