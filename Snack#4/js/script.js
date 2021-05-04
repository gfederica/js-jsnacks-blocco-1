// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// scriviamo un array con i nomi
var nome = ["Federica", "Francesco", "Roberta", "Luisa", "Paolo", "Gianni", "Claudia", "Teodoro"];

// scriviamo un array con i cognomi
var cognome = ["Giudice", "Zago", "Antoni", "Natale", "Bertino", "Bianchi", "Incardona", "Brafa", "Martino", "Neri"];

 
// definisco la funzione che mi genera una volta il nome e cognome
function elementoRandom (x, y) {
    var xRandom = x[Math.floor(Math.random() * x.length)];
    var yRandom = y[Math.floor(Math.random() * y.length)];
    return xRandom + " " + yRandom;
}

// variabile del singolo invitato con la posizione nell'html
var invitato = document.getElementById("invitati");

// chiamo la funzione dentro un ciclo for per 10 volte
for (var i = 0; i < 10; i++) {
    invitatoRandom = elementoRandom(nome, cognome);
    console.log(invitatoRandom);
    invitato.innerHTML += "<li>" + invitatoRandom +"</li>";
}
