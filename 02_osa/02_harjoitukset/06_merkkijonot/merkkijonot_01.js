/**
Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
*/

function getCharCount(str) {
    return str.length;
}

// Esimerkkikäyttö - älä muokkaa
console.log(getCharCount('Sam')); // 3
console.log(getCharCount('Alex 123')); // 8
console.log(getCharCount('Jimi was here')); // 13



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function countCharacters(input) {
    return input.length;
 }



// Kutsu tekemääsi funktiota
console.log(countCharacters('Hello World'));
console.log(countCharacters('Test 123'));