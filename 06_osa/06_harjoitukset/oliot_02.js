
/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän
const kirjasto = [
    { otsikko: "Kirja 1", kirjailija: "Kirjailija 1", julkaisuvuosi: 2001 },
    { otsikko: "Kirja 2", kirjailija: "Kirjailija 2", julkaisuvuosi: 2002 }
];

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = 2023;
console.log(kirjasto[1]);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
kirjasto[0].lajityypit = ["Fiktio", "Seikkailu"];
kirjasto[0]["onSaatavilla"] = true;


/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän

function Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
}

const uusiKirja = new Kirja("Kirja 3", "Kirjailija 3", 2003, ["Draama"]);
kirjasto.push(uusiKirja);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    return {
        otsikko: otsikko,
        kirjailija: kirjailija,
        julkaisuvuosi: julkaisuvuosi,
        lajityypit: lajityypit
    };
}

const uusiKirja2 = luoKirja("Kirja 4", "Kirjailija 4", 2004, ["Sci-Fi"]);
console.log(uusiKirja2);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const kirjastoJSON = JSON.stringify(kirjasto);
console.log(kirjastoJSON);

const kirjastoObj = JSON.parse(kirjastoJSON);
console.log(kirjastoObj[0].otsikko);