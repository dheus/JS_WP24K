/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

function updateContent() {
    const contentElement = document.getElementById('content');
    contentElement.textContent = 'Hei, maailma!';
}
