document.getElementById('vowel-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const text = document.getElementById('text').value.trim();
    const resultDiv = document.getElementById('result');

    if (!text) {
        resultDiv.textContent = 'Please enter some text.';
        return;
    }

    const vowels = text.match(/[aeiouAEIOU]/g);
    const vowelCount = vowels ? vowels.length : 0;

    resultDiv.textContent = `Vowel Count: ${vowelCount}`;
});