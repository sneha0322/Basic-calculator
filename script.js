// script.js

// Get the display element
let display = document.getElementById('display');

// Append values to the display when a button is clicked
function appendToDisplay(value) {
    const lastChar = display.value.slice(-1);

    // Prevent entering multiple operators consecutively
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    // Append the value to the display
    display.value += value;
}

// Clear the display when C button is clicked
function clearDisplay() {
    display.value = '';
}

// Calculate the result when = button is clicked
function calculateResult() {
    try {
        // Use eval to calculate the result based on the current display value
        const result = eval(display.value);

        // If result is invalid, show 'Error'
        if (result === undefined || result === Infinity || result === -Infinity || isNaN(result)) {
            throw new Error("Invalid Calculation");
        }

        // Display the result
        display.value = result;
    } catch (error) {
        // Show 'Error' if there's an issue with the calculation
        display.value = 'Error';
    }
}
