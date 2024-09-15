// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0. 
// Tässä vaiheessa ohjelma lopettaa toimintansa. 
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.
let numerot = [];
let luku;

while (true) {
  luku = Number(prompt("Syötä numero (0 lopettaa):"));
  if (luku === 0) {
    break;
  }
  numerot.push(luku);
}

if (numerot.length > 0) {
  let summa = numerot.reduce((acc, num) => acc + num, 0);
  let keskiarvo = summa / numerot.length;
  alert(`Syötettyjen numeroiden keskiarvo on ${keskiarvo.toFixed(2)}`);
} else {
  alert("Et syöttänyt yhtään numeroa.");
}