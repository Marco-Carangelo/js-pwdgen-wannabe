// Variable definition and input acquisition

//Constant
const userName = prompt("Inserire il nome");
const userLastName = prompt("Inserire il cognome");
const favoriteColor = prompt("Inserire il colore preferito");
const num1 = prompt("Inserire il dividendo da cui generare la password");
const num2 = prompt("Inserire il divisore da cui generare la password");

// Assegnazioni temporanee per non inserire tutti valori ad ogni modifica del
// const userName = '3';
// const userLastName = '3';
// const favoriteColor = '3';
// const num1 = '3';
// const num2 = '3';



//Variables
//let finalNumber = num1 / num2;

// Result visualization on the console

console.log(
    `************STAMPA RISULTATO SU CONSOLE************

Nome: ${userName}
Cognome: ${userLastName} 
Colore Preferito: ${favoriteColor}
Primo numero inserito: ${num1}
Secondo numero inserito: ${num2}

***************************************************
La Password generata è: ${userName + userLastName + favoriteColor + (num1 / num2)}`
)

