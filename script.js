
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
