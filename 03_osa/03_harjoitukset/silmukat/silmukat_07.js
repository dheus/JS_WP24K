// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
// tulostaa pienimmän ja suurimman numeron.
// Tähän on ainakin kaksi vaihtoehtoa, löydät ne esimerkkivastaukset - kansiosta
let numerot = [];
for (let i = 0; i < 10; i++) {
  let luku = Number(prompt("Syötä numero:"));
  numerot.push(luku);
}

let summa = numerot.reduce((acc, num) => acc + num, 0);
let keskiarvo = summa / numerot.length;
let pienin = Math.min(...numerot);
let suurin = Math.max(...numerot);

console.log(`Summa: ${summa}`);
console.log(`Keskiarvo: ${keskiarvo.toFixed(2)}`);
console.log(`Pienin numero: ${pienin}`);
console.log(`Suurin numero: ${suurin}`);