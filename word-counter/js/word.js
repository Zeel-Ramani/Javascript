// Word counter

document.getElementById('word-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let text = document.getElementById('text').value.trim();
    let resultDiv = document.getElementById('result');

    if (!text) {
        resultDiv.textContent = 'Please enter some text.';
        return;
    }

    let words = text.split(/\s+/);
    let wordCount = words.length;

    resultDiv.textContent = `Word Count: ${wordCount}`;
});