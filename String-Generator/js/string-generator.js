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

document.getElementById('length').addEventListener('input', (event) => {
    document.getElementById('error-message').style.display = 'none';
});

document.getElementById('download-button').addEventListener('click', () => {
    let result = document.getElementById('result').textContent;
    let blob = new Blob([result], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    document.getElementById('download').href = url;
    document.getElementById('download-link').style.display = 'block';
});

document.getElementById('copy-button').addEventListener('click', () => {
    let result = document.getElementById('result').textContent;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard!');
});

document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('length').value = '';
    document.getElementById('result').textContent = '';
});