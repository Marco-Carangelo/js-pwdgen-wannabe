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
Primo numero inserito: ${num1}
Secondo numero inserito: ${num2}

***************************************************
La Password generata è: ${userName + userLastName + favoriteColor + (num1 / num2)}`
)

//Print user data

document.getElementById('user-name').innerHTML = userName;
document.getElementById('user-last-name').innerHTML = userLastName;
document.getElementById('user-color').innerHTML = favoriteColor;
document.getElementById('user-num-1').innerHTML = num1;
document.getElementById('user-num-2').innerHTML = num2;

//Print password
document.getElementById('user-psw').innerHTML = userName + userLastName + favoriteColor + (num1 / num2);




