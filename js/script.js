// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo: js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// L'output va stampato nella pagina HTML.


// Chiedere all'utente i km che vuole percorrere
const userDistance = parseInt(prompt("Quanti chilometri vuoi percorrere"));
console.log(userDistance);

// Chiedere all'utente l'età
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// Calcolare prezzo biglietto 0.21 x i km
const ticketPrice = 0.21 * userDistance
console.log(ticketPrice);

// Calcolo sconto del 20%
const discountUnder = (ticketPrice * 20) / 100;

// Calcolo sconto del 40%
const discountOver = (ticketPrice * 40) / 100;

// Se l'utente ha meno di 18 anni sconto del 20%
// Se l'utente ha più di 65 anni sconto del 40%
let resultPrice;

if (userAge < 18) {
    resultPrice = ticketPrice - discountUnder;
} else if (userAge > 65) {
    resultPrice = ticketPrice - discountOver;
} else {
    resultPrice = ticketPrice;
}

console.log(resultPrice);

// Trasformare il prezzo finale con solo due decimali 
const priceFormatted = resultPrice .toFixed(2);

// Stampare nella pagina html