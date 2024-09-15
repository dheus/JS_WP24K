/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  return name.charAt(name.length - 1);
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function lastChar(input) {
  return input.charAt(input.length - 1);
}



// Kutsu tekemääsi funktiota
console.log(lastChar('Steve')); 
console.log(lastChar('Minecraft'));