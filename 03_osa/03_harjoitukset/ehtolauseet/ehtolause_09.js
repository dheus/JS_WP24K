/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */ 

function magic8Ball() {
    const responses = [
        "Kyllä, ehdottomasti!",
        "Ei missään nimessä.",
        "Ehkä.",
        "Kysy myöhemmin uudelleen.",
        "En osaa sanoa nyt.",
        "Todennäköisesti.",
        "Ei näytä hyvältä.",
        "Kyllä, mutta myöhemmin."
    ];

    const question = prompt("Syötä kyllä-tai-ei -kysymys:");
    if (question) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        const answer = responses[randomIndex];
        console.log("Magic 8-Ball vastaa: " + answer);
    } else {
        console.log("Et syöttänyt kysymystä.");
    }
}

magic8Ball();