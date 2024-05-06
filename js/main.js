// Variable definition and input acquisition

const userName = prompt("Inserire il nome");
const userLastName = prompt("Inserire il cognome");
const favoriteColor = prompt("Inserire il colore preferito");
const finalNumber = 21;

// Resulti visualization on the console

console.log(
    `************STAMPA RISULTATO SU CONSOLE************

Nome: ${userName}
Cognome: ${userLastName} 
Colore Preferito: ${favoriteColor}

***************************************************
La Password generata è: ${userName + userLastName + favoriteColor + finalNumber}`
)

