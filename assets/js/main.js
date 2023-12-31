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

/* MILESTONE 2:
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
Ricordate, molte cose nella vita se fatte per la prima volta risultano difficili se non quasi impossibili, ma é perseverando e soprattutto sbagliando che impariamo. Che la forza sia con voi! */




const vai = document.getElementById('vai').addEventListener('click', function () {
    const userName = document.getElementById('nome').value;
    console.log(userName);

    const kmToDo = Number(document.getElementById('km').value);
    console.log(kmToDo);

    const userAge = document.getElementById('age').selectedIndex;
    const selectAge = document.getElementById("age").options;
    console.log(selectAge[userAge].text);

    const pricePerKm = 0.21;
    console.log(pricePerKm + ' €');
    
    let travelPrice = pricePerKm * kmToDo;

    if (userAge == '1') {
        travelPrice = (travelPrice - (travelPrice * 0.2));
        
    
    } else if (userAge == '2') {
        travelPrice = (travelPrice - (travelPrice * 0.4));
        
    }

    console.log(travelPrice.toFixed(2) + ' €');

    const domPassengerName = document.getElementById('passengerName');
    domPassengerName.innerHTML = userName;

    const domOffertType = document.getElementById('offertType');
    domOffertType.innerHTML = (selectAge[userAge].text);

    const carrozza = document.getElementById('carrozza');
    carrozza.innerHTML = Math.floor(Math.random() * 15)+1;

    const cp = document.getElementById('cp');
    cp.innerHTML = Math.floor(Math.random() * 100000)+1;

    const domFinalPrice = document.getElementById('final_price');
    domFinalPrice.innerHTML = travelPrice.toFixed(2) + ' €';
    

})

const reset = document.getElementById('reset').addEventListener('click', function () {

    location.reload();


})

