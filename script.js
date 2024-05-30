document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(temperatureInput)) {
        document.getElementById('resultOutput').innerText = 'Please enter a valid temperature.';
        return;
    }

    let result;

    if (inputUnit === outputUnit) {
        result = temperatureInput;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            result = (temperatureInput * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            result = temperatureInput + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            result = (temperatureInput - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            result = (temperatureInput - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            result = temperatureInput - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('resultOutput').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
});
