/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */
function lowerName(name) {
    return name.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function toLowLetters(input) {
    return input.toLowerCase();
}



// Kutsu tekemääsi funktiota
console.log(toLowLetters('Nancy')); 
console.log(toLowLetters('Spungen'));