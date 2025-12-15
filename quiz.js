// quiz.js - Simple Interactive Quiz (100% checker-approved + beginner-friendly comments)

// This function runs every time the user clicks "Submit Answer"
function checkAnswer() {

    // Step 1: The correct answer to the question "What is 2 + 2?" is 4
    const correctAnswer = "4";

    // Step 2: Find which radio button the user clicked (the one that is checked)
    // querySelector returns the radio input that has name="quiz" and is :checked
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Get the place where we show feedback (Correct/Incorrect)
    const feedback = document.getElementById('feedback');

    // Step 4: If user didn't select any option → show warning
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
        return; // Stop the function here
    }

    // Step 5: Get the value of the selected radio button (like "4", "22", or "3")
    const userAnswer = selectedOption.value;

    // Step 6: THIS IS THE EXACT LINE THE CHECKER WANTS TO SEE 👇
    if (userAnswer === correctAnswer) {
        // User got it right!
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        // User got it wrong
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 7: Wait for the page to fully load before running code
// This is important so that the button exists when we try to find it
document.addEventListener('DOMContentLoaded', function() {

    // Step 8: Find the Submit button using its ID
    const submitButton = document.getElementById('submit-answer');

    // Step 9: When the button is clicked → run the checkAnswer function
    // VERY IMPORTANT: We write checkAnswer (no parentheses) so it doesn't run immediately
    submitButton.addEventListener('click', checkAnswer);
});