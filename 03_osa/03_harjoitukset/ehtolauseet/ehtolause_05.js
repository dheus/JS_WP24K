/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}




// Kutsu tekemääsi funktiota
console.log(isEvenOrOdd(25));
console.log(isEvenOrOdd(18));
console.log(isEvenOrOdd(-17));