/*
Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array 
e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione 
compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

const numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function numeriCompresi(array, numeroMin, numeroMax) {
    let nuovoArray = array.filter((element, index) => {
        return index > numeroMin && index < numeroMax;
    });
    
    return nuovoArray;
}

let nuovoArray = numeriCompresi(numeri, 2, 9);

console.log(nuovoArray);
