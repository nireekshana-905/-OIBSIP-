// Select Elements
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsDiv = document.getElementById("results");
const resultCard = document.getElementById("resultCard");
const errorText = document.getElementById("error");

// Convert Button
convertBtn.addEventListener("click", () => {

    const temp = temperatureInput.value.trim();

    // Validation
    if (temp === "" || isNaN(temp)) {
        errorText.textContent =
            "Please enter a valid numeric temperature.";
        resultsDiv.innerHTML = "";
        resultCard.classList.remove("show");
        return;
    }

    errorText.textContent = "";

    const value = parseFloat(temp);
    const unit = unitSelect.value;

    let resultHTML = "";

    // Celsius
    if (unit === "celsius") {

        const fahrenheit = (value * 9 / 5) + 32;
        const kelvin = value + 273.15;

        resultHTML = `
            <div class="result-item">
                <strong>Fahrenheit:</strong>
                ${fahrenheit.toFixed(2)} °F
            </div>

            <div class="result-item">
                <strong>Kelvin:</strong>
                ${kelvin.toFixed(2)} K
            </div>
        `;
    }

    // Fahrenheit
    else if (unit === "fahrenheit") {

        const celsius = (value - 32) * 5 / 9;
        const kelvin = celsius + 273.15;

        resultHTML = `
            <div class="result-item">
                <strong>Celsius:</strong>
                ${celsius.toFixed(2)} °C
            </div>

            <div class="result-item">
                <strong>Kelvin:</strong>
                ${kelvin.toFixed(2)} K
            </div>
        `;
    }

    // Kelvin
    else {

        const celsius = value - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        resultHTML = `
            <div class="result-item">
                <strong>Celsius:</strong>
                ${celsius.toFixed(2)} °C
            </div>

            <div class="result-item">
                <strong>Fahrenheit:</strong>
                ${fahrenheit.toFixed(2)} °F
            </div>
        `;
    }

    resultsDiv.innerHTML = resultHTML;
    resultCard.classList.add("show");

});

// Reset Button
resetBtn.addEventListener("click", () => {

    temperatureInput.value = "";
    unitSelect.selectedIndex = 0;

    resultsDiv.innerHTML = "";
    errorText.textContent = "";

    resultCard.classList.remove("show");
});