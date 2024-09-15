/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function laskeKolmionPintaala(kannanPituus, korkeus) {
    return (kannanPituus * korkeus) / 2;
}
console.log(laskeKolmionPintaala(4, 5));
console.log(laskeKolmionPintaala(6, 7));
console.log(laskeKolmionPintaala(10, 8));