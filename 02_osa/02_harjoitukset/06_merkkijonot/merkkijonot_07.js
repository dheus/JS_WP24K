/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function combineInitials(firstInitial, lastInitial) {
    return firstInitial + lastInitial;
}



// Kutsu tekemääsi funktiota
console.log(combineInitials('C', 'S'));
console.log(combineInitials('O', 'L'));