/* **Palidroma**
.1 Chiedere all’utente di inserire una parola
.2 Creare una funzione per capire se la parola inserita è palindroma 





//1. creiamo la nostra variabile utilizzando prompt chiedendo di inserire una parola 

const stampa = document.getElementById('output')

const parola = prompt('inserisci una parola');

//7. assegnamo alla variabile parolaFinale la funzione "parolaPalindroma(parola)" per visualizzare se la parola inserita è o non è palindroma
let parolaFinale = parolaPalindroma(parola)

//6. inseriamo tutto il procedimento logico dentro una funzione

function parolaPalindroma(stringa){

  let stringaInversa = stringa.split('').reverse().join('');

//2. creiamo un'altra variabile ed utilizziamo il metodo split per suddividere la parola inserita in tante sottostringhe(o array)
let parolaDivisa = parola.split('')
console.log(parolaDivisa);

//3. invertiamo l'ordine delle sottostringhe

let parolaInvertita = parolaDivisa.reverse();
console.log(parolaInvertita)

//4. ricomponiamo la parola invertita in una stringa intera

let parolaUnita = parolaInvertita.join('');

  //5. facciamo un controllo sulla parola inserita dall'utente e quella finale dopo aver utilizzzato i metodi
  if(parola === parolaUnita){
  console.log('la parola inserita è palindroma');
  stampa.innerHTML = 'la parola inserita è palindroma: ' + parola;
  }else{
  console.log('la parola non è palindroma');
  stampa.innerHTML = 'la parola non è palindroma: ' + parola;
  }

  return stringaInversa;
}
*/

/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//1.creiamo le nostre variabile utilizzando prompt chiedendo di inserire pari o dispari e di inserire un numero da 1 a 5
const pariDispari = prompt('Pari o Dispari');

const numInserito = parseInt(prompt('inserisci un numero da 1 a 5'));

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
function numeroPcRandom(min, max) {
   let numberRandom = Math.round(Math.random() * (max - min + 1) + min);
  
  if(numberRandom > 0 && numberRandom <= 5){
    
  }

  console.log(numeroPcRandom);

  return numberRandom
}console.log(numberRandom);