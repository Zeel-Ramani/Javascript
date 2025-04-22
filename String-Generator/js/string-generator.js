document.getElementById('string-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let length = parseInt(document.getElementById('length').value);
    let resultDiv = document.getElementById('result');

    if (!length || length <= 0) {
        resultDiv.textContent = 'Please enter a valid length.';
        return;
    }

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }

    resultDiv.textContent = `Generated String: ${randomString}`;
});