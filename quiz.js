// Function to check the user's answer
function checkAnswer() {
    // The correct answer is 4
    const correctAnswer = "4";

    // Get the selected radio button (the one user checked)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph
    const feedback = document.getElementById('feedback');

    // Check if user selected anything
    if (userAnswer) {
        // Compare user's answer with correct one
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If nothing is selected
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
    }
}

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button
    const submitButton = document.getElementById('submit-answer');
    
    // Add click event → call checkAnswer when clicked
    submitButton.addEventListener('click', checkAnswer);
});