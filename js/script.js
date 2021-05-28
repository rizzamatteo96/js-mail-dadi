// Gioco dei dadi Generare un numero random da 1 a 6, 
// sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1 - generare numero random per computerù
var max = 6;
var min = 1;
var numeroComputer = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroComputer);

// 2 - generare numero random per utente
var numeroUtente = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroUtente);

// 3 - confrontare i risultati e vedere chi vince
var risultato = 'nessun vincitore';

if (numeroComputer > numeroUtente) {
    risultato = 'computer vince!';
} else if (numeroUtente > numeroComputer) {
    risultato = 'hai vinto!'
}

console.log(risultato);

// 4 - comunicare il risultato al giocatore
