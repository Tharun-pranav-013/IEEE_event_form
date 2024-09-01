// Function to show the sign-up page
function showSignUpPage() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Function to validate the registration form
function validateForm() {
    // Perform any necessary validation
    return true; // Change this according to actual validation
}

// Function to validate the verification form
function validateVerificationForm() {
    // Perform any necessary verification logic
    // If verification is successful, show the poster
    showPoster();
    return false; // Prevent the form from actually submitting
}

// Function to show the poster and background overlay
function showPoster() {
    document.querySelector('.background').style.display = 'none'; // Hide the background image
    document.querySelector('.navbar').style.display = 'none'; // Hide the navigation bar
    document.getElementById('registration-form').style.display = 'none'; // Hide the registration form
    document.getElementById('signup-form').style.display = 'none'; // Hide the sign-up form
    document.querySelector('.poster-container').style.display = 'block'; // Show the poster
    document.querySelector('.background-overlay').style.display = 'block'; // Show the background overlay
}

// Optional: Hide poster and overlay on clicking the overlay
document.querySelector('.background-overlay').addEventListener('click', () => {
    document.querySelector('.poster-container').style.display = 'none';
    document.querySelector('.background-overlay').style.display = 'none';
    document.querySelector('.background').style.display = 'block'; // Show the background image
    document.querySelector('.navbar').style.display = 'block'; // Show the navigation bar
});
