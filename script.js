// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (name === "" || email === "" || message === "") {
        // If any field is empty, show an error message
        document.getElementById("formFeedback").innerHTML = "<p style='color: red;'>All fields are required!</p>";
    } else if (!validateEmail(email)) {
        // If the email format is incorrect
        document.getElementById("formFeedback").innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
    } else {
        // Simulate successful form submission
        document.getElementById("formFeedback").innerHTML = "<p style='color: green;'>Thank you for your message, " + name + "!</p>";
        document.getElementById("contactForm").reset(); // Reset form fields
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Slider Dynamic Content
const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");

// Display slider value
volumeSlider.addEventListener("input", function() {
    volumeValue.textContent = volumeSlider.value;
});
