/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.
function getLetterGrade(score) {
    if (score >= 85) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 55) {
        return 'C';
    } else {
        return 'D';
    }
}



// Kutsu tekemääsi funktiota
console.log('Sinä sait ' + getLetterGrade(95));
console.log('Sinä sait ' + getLetterGrade(81));
console.log('Sinä sait ' + getLetterGrade(72));
console.log('Sinä sait ' + getLetterGrade(64));
console.log('Sinä sait ' + getLetterGrade(42));