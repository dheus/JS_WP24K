// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.
let maara = Number(prompt("Kuinka monta numeroa haluat syöttää?"));
let numerot = [];

for (let i = 0; i < maara; i++) {
  let luku = Number(prompt("Syötä numero:"));
  numerot.push(luku);
}

let pienin = Math.min(...numerot);
let suurin = Math.max(...numerot);

console.log(`Pienin numero: ${pienin}`);
console.log(`Suurin numero: ${suurin}`);