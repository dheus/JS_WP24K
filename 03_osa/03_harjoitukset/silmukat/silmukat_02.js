// Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
// 2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville. 
// Saat itse valita käytkö luvut läpi kaksi kertaa vai lopetatko lukuun 50.
let result = '';
for (let i = 2; i <= 50; i += 2) {
  result += i + ', ' + (100 - i) + ', ';
}
console.log(result);