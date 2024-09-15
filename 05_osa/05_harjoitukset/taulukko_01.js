// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
let teamMembers1 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

console.log("Harjoitus 1:");
teamMembers1.forEach(member => console.log(member));
console.log();

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
let teamMembers2 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
teamMembers2.shift();

console.log("Harjoitus 2:");
teamMembers2.forEach(member => console.log(member));
console.log();

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
let teamMembers3 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
teamMembers3.pop();

console.log("Harjoitus 3:");
teamMembers3.forEach(member => console.log(member));
console.log();

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
let teamMembers4 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
teamMembers4.unshift('Aleksi');

console.log("Harjoitus 4:");
teamMembers4.forEach(member => console.log(member));
console.log();

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
let teamMembers5 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
teamMembers5.push('Linda');

console.log("Harjoitus 5:");
teamMembers5.forEach(member => console.log(member));
console.log();

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
let teamMembers6 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let newTeamMembers6 = teamMembers6.slice(2);

console.log("Harjoitus 6:");
newTeamMembers6.forEach(member => console.log(member));
console.log();

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:
let teamMembers7 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let miikkaIndex = teamMembers7.indexOf('Miikka');

console.log("Harjoitus 7:");
console.log(miikkaIndex);
console.log();

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:
let teamMembers8 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let jaakkoIndex = teamMembers8.indexOf('Jaakko');

console.log("Harjoitus 8:");
console.log(jaakkoIndex);
console.log();

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
let teamMembers9 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let miikkaSpliceIndex = teamMembers9.indexOf('Miikka');
if (miikkaSpliceIndex !== -1) {
    teamMembers9.splice(miikkaSpliceIndex, 1, 'Karoliina', 'Bettina');
}
console.log("Harjoitus 9:");
console.log(teamMembers9.forEach(member => console.log(member)));
console.log();

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:
let teamMembers10 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let extendedTeamMembers = [...teamMembers10, 'Hemmo'];

console.log("Harjoitus 10:");
extendedTeamMembers.forEach(member => console.log(member));
console.log();

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:
let teamMembers11 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let copiedTeamMembers = teamMembers11.slice();

console.log("Harjoitus 11:");
extendedTeamMembers.forEach(member => console.log(member));
console.log();

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let teamMembers12 = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:
let combinedTeamMembers = teamMembers12.concat(newMembers);

console.log("Harjoitus 12:");
combinedTeamMembers.forEach(member => console.log(member));
console.log();

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:
let teamMembers13 = ['Jukka', 'Emilia', 'Miikka', 'Saara', 'Jukka'];
let jukkaIndices = [];
teamMembers13.forEach((member, index) => {
    if (member === 'Jukka') {
        jukkaIndices.push(index);
    }
});

console.log("Harjoitus 13:");
console.log(jukkaIndices);
console.log();

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:
let teamMembers14 = ['Jukka', 'Emilia', 'Miikka', 'Saara', 'Jukka'];
let upperCaseTeamMembers = teamMembers.map(member => member.toUpperCase());

console.log("Harjoitus 14:");
upperCaseTeamMembers.forEach(member => console.log(member));
console.log();