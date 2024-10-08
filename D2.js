/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 30;
let num2 = 50;

if (num1 > num2) {
  console.log(num1 + " è il numero più grande");
} else if (num2 > num1) {
  console.log(num2 + " è il numero più grande");
} else {
  console.log("I numeri sono uguali");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 7;

if (numero !== 5) {
  console.log("not equal 5");
}




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 50;

if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
    console.log("non è divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 6;
let b = 2;

if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b-a === 8 ) {
    
    console.log("VERIFICATO");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 70;


if (totalShoppingCart > 50) {
  shippingCost = 0;
} else{
  shippingCost = 10;
}
let checkout = totalShoppingCart + shippingCost;
console.log("Totale da pagare: " + checkout + "€");




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discount = totalShoppingCart * 0.2;
totaleDaPagare= totalShoppingCart - discount;

if (totaleDaPagare > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}

checkout = totaleDaPagare + shippingCost;
console.log("Totale da pagare con sconto: " + totalCheckout + "€");





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 30;
let y = 60;
let z = 90;

if (x > y && x > z && y > z ){
  console.log(x, y, z)

}else if (x > y && x > z && z > y ){
  console.log(x, z, y)
}else if(y > x && y > z && x > z ){
  console.log(y, x, z)
}else if(y > x && y > z && z > x ){
  console.log(y, z, x)
}else if(z > x && z > y && y > x ){
  console.log(z, y, x)
}else{
  console.log(z, x, y)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valoredacontrollare = 5;
let tipo = typeof valoredacontrollare;
if (tipo === 'number'){
  console.log("il valore è un tipo di dato numerico");
}
else{
  console.log("il valore è un tipo di dato diverso da quello numerico");
}





/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 9;

if (number % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  let val = 1;
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val2 = 7;
if (val <5){
    console.log("il numero è minore di 5");
} else if(val <10 && val>=5){
  console.log ("il numero è compreso tra 5 e 10");
}
else if(val => 10){
  console.log("il numero è uguale o maggiore di 10");
} else {
  console.log ("il numero non è contemplato nelle regole");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
};
console.log(me.city);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[9] = 100;


