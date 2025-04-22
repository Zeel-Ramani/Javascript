class CurrencyConverter {
    constructor() {
        this.conversionRates = {
            USD: 1,
            EUR: 0.85,
            GBP: 0.75,
            INR: 74.5,
            AUD: 1.35,
        };
    }

    convert(amount, fromCurrency, toCurrency) {
        if (!this.conversionRates[fromCurrency] || !this.conversionRates[toCurrency]) {
            throw new Error("Invalid currency");
        }

        let amountInUSD = amount / this.conversionRates[fromCurrency];
        return amountInUSD * this.conversionRates[toCurrency];
    }
}

let converter = new CurrencyConverter();

let form = document.getElementById("currency-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;
    let resultElement = document.getElementById("result");

    try {
        let result = converter.convert(amount, fromCurrency, toCurrency);
        resultElement.textContent = `Converted amount: ${result.toFixed(2)} ${toCurrency}`;
    }
    catch (error) {
        resultElement.textContent = error.message;
    }
});