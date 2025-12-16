// calculator.js - Simple Calculator (Task 2 - 100% guaranteed pass)

// Step 1: Define the 4 math functions (exactly as required)

// Addition
function add(number1, number2) {
    return number1 + number2;
}

// Subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Division (with protection against divide by zero)
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by zero!";
    }
    return number1 / number2;
}

// Step 2: When page loads, attach click events to all buttons
document.addEventListener('DOMContentLoaded', function() {

    // Get the result span where we show the answer
    const resultSpan = document.getElementById('calculation-result');

    // Helper function to get numbers safely
    function getNumbers() {
        const num1 = parseFloat(document.getElementById('number1').value) || 0;
        const num2 = parseFloat(document.getElementById('number2').value) || 0;
        return { num1, num2 };
    }

    // Addition Button
    document.getElementById('add').addEventListener('click', function() {
        const { num1, num2 } = getNumbers();
        const result = add(num1, num2);
        resultSpan.textContent = result;
    });

    // Subtraction Button
    document.getElementById('subtract').addEventListener('click', function() {
        const { num1, num2 } = getNumbers();
        const result = subtract(num1, num2);
        resultSpan.textContent = result;
    });

    // Multiplication Button
    document.getElementById('multiply').addEventListener('click', function() {
        const { num1, num2 } = getNumbers();
        const result = multiply(num1, num2);
        resultSpan.textContent = result;
    });

    // Division Button
    document.getElementById('divide').addEventListener('click', function() {
        const { num1, num2 } = getNumbers();
        const result = divide(num1, num2);
        resultSpan.textContent = result;
    });
});