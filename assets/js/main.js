/* 

Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.

*/

// chiedi il nome

const userName = prompt('Come ti chiami?', 'nome cognome');

// chiedi i km da percorrere

const kmToDo = Number(prompt('Quanti km vuoi percorrere?'));

// chiedi età utente

const userAge = Number(prompt('Quanti anni hai?'));

console.log(kmToDo, userAge);

//calcolare prezzo ( a km = 0.21 €)

const pricePerKm = 0.21;

let travelPrice = Number(kmToDo * pricePerKm );

console.log(travelPrice);

let message = 'Il costo del biglietto è ' + travelPrice.toFixed(2) + ' €'

// verifica se minore di 18 👉 sconto 20%
// verifica se maggiore di 65 👉 sconto 40%

document.querySelector('button').innerHTML = 'Maggiorenne'


if (userAge < 18) {
    travelPrice = (travelPrice - (travelPrice * 0.2))
    message = 'Il costo del biglietto è ' + travelPrice.toFixed(2) + ' € ' + 'applicando lo sconto del 20% ( under 18 )'
    document.querySelector('button').innerHTML = 'Minorenne'

} else if (userAge > 65) {
    travelPrice = (travelPrice - (travelPrice * 0.4))
    message = 'Il costo del biglietto è ' + travelPrice.toFixed(2) + ' € ' + 'applicando lo sconto del 40% ( over 65 )'
    document.querySelector('button').innerHTML = 'Over 65'
}

console.log(message);

document.getElementById('nome').value = userName

document.getElementById('km').value = kmToDo











/* 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) }
Ricordate, molte cose nella vita se fatte per la prima volta risultano difficili se non quasi impossibili, ma é perseverando e soprattutto sbagliando che impariamo. Che la forza sia con voi!*/