// Variable definition and input acquisition

//Constant
const userName = prompt("Inserire il nome");
const userLastName = prompt("Inserire il cognome");
const favoriteColor = prompt("Inserire il colore preferito");
const num1 = prompt("Inserire il dividendo da cui generare la password");
const num2 = prompt("Inserire il divisore da cui generare la password");


//Variables
//let finalNumber = num1 / num2;

// Result visualization on the console

console.log(
    `************STAMPA RISULTATO SU CONSOLE************

Nome: ${userName}
Cognome: ${userLastName} 
Colore Preferito: ${favoriteColor}

***************************************************
La Password generata è: ${userName + userLastName + favoriteColor + (num1 / num2)}`
)

