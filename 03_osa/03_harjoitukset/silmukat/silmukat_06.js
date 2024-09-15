/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/
let numerot = [];
let jatka;

do {
  let luku = Number(prompt("Syötä numero:"));
  numerot.push(luku);
  jatka = prompt("Haluatko jatkaa numeroiden antamista? (k/e)").toLowerCase();
} while (jatka === 'k');

if (numerot.length > 0) {
  let summa = numerot.reduce((acc, num) => acc + num, 0);
  let keskiarvo = summa / numerot.length;
  alert(`Syötettyjen numeroiden keskiarvo on ${keskiarvo.toFixed(2)}`);
} else {
  alert("Et syöttänyt yhtään numeroa.");
}