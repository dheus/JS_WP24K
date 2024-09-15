// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. 
let parillisetLuvut = 0;

for (let i = 0; i < 20; i++) {
  let luku = Number(prompt("Syötä luku:"));
  if (luku % 2 === 0) {
    parillisetLuvut++;
  }
}

alert(`Syöttämistäsi luvuista ${parillisetLuvut} on parillisia.`);