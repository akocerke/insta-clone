
//============LOGIN=====================
function onSubmitForm() {
    // Verhindert das Standardverhalten des Formulars, um die Seite nicht neu zu laden
    event.preventDefault();

    // Formulardaten sammeln
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // JSON-Objekt erstellen
    const jsonData = JSON.stringify(formData);

    

    // Informationen auch in der output-Div anzeigen
    document.getElementById('output').innerText = jsonData;
}

//============SIGNUP=====================
function onSignUpForm() {
    // Verhindert das Standardverhalten des Formulars, um die Seite nicht neu zu laden
    event.preventDefault();

    // Formulardaten sammeln
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // JSON-Objekt erstellen
    const jsonData = JSON.stringify(formData);

    

    // Informationen auch in der output-Div anzeigen
    document.getElementById('output').innerText = jsonData;
}


// //=============loading==================
// function makeLoadingDisapear() {
//     const loadingDiv = document.getElementById('callback');
//     // Zeige den Ladebildschirm an
//     loadingDiv.style.display = 'flex';
//     // Simuliere die Datenbankabfrage
//     setTimeout(function( ) {
//     // Dieser Code wird nach 2 Sekunden ausgeführt
//     loadingDiv.style.display = 'none';
//     }, 2000)
// }
//     document.addEventListener('DOMContentLoaded', makeLoadingDisapear);

//=============loading==================
function simulateDatabaseQuery(callback) {
    // Simuliere eine Datenbankabfrage mit einem Timeout von 2 Sekunden
    setTimeout(callback, 2000);
}

function loadImages() {
    const loadingDiv = document.getElementById('callback');
    const imageGrid = document.getElementById('gallerie');

    // Zeige den Ladebildschirm an
    loadingDiv.style.display = 'block';

    // Simuliere die Datenbankabfrage
    simulateDatabaseQuery(function () {
        // Verstecke den Ladebildschirm nach der Datenbankabfrage
        loadingDiv.style.display = 'none';

        // JSON-Daten mit Bild-URLs (Beispiel)
        const jsonData = {
            images: [
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png',
                'img/6.png',

                // ... weitere Bild-URLs
            ]
        };

        // Iteriere durch die Bild-URLs im JSON-Objekt
        jsonData.images.forEach(function (imageUrl) {
            var imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            var imageElement = document.createElement('img');
            imageElement.src = imageUrl;

            imageContainer.appendChild(imageElement);
            imageGrid.appendChild(imageContainer);
        });
    });
}

document.addEventListener('DOMContentLoaded', loadImages);


//==============Progressbar
// Move-Funktion, um die Progressbar zu aktualisieren
function move() {
    var elem = document.getElementById("myBar");
    var width = parseInt(elem.style.width) || 1; // Aktuelle Breite oder 1, wenn nicht vorhanden
    width++;
    elem.style.width = width + "%";
    
    if (width >= 100) {
        clearInterval(intervalID);
    }
}

// Automatisch alle 10 Millisekunden die Move-Funktion aufrufen
var intervalID = setInterval(move, 10);


