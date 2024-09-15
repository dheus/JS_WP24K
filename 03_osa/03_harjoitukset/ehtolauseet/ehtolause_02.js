/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/
function getTemperature(temp) {
    if (temp < 15) {
        console.log("Pue takki päälle.");
    } else {
        console.log("Ei tarvitse takkia.");
    }
}

let esimerkki = prompt('Mikä on nykyinen lämpötila?');

let numero = Number(esimerkki);

getTemperature(numero);


// Treenaa: Keksi itse samanlainen funktio eri nimellä
function isJacket(temp) {
    if (temp < 15) {
        console.log("Put on a jacket.");
    } else {
        console.log("Don't put on a jacket.");
    }
}
let esimerkki2 = prompt('What is the current temperature?');
let numero2 = Number(esimerkki2);




// Kutsu tekemääsi funktiota
isJacket(numero);