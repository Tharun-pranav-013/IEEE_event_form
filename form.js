// Function to validate the main registration form
function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    if (firstName === "" || lastName === "" || phoneNumber === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simple validation for phone number and email format
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Registration successful!");
    return true;
}

// Function to show the sign-up page
function showSignUpPage() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}



// Function to validate the verification form and redirect to the participation details page
function validateVerificationForm() {
    const verificationEmail = document.getElementById('verificationEmail').value;
    if (verificationEmail === "") {
        alert("Please enter your email to verify.");
        return false;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(verificationEmail)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Redirect to the participation details page after successful verification
    window.location.href = 'participation-details.html'; // Change this to the actual path of the new page
    return false; // Prevent form submission
}
