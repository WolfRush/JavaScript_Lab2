console.log("Contact page script loaded.");

// Form field elements
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const sendButton = document.getElementById('form-send');
const clearButton = document.getElementById('form-clear');

charfunction(); // Initialize character counter on page load

// Validation functions
function validateName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(phone);
}

function validateMessage(message) {
    return message.trim().length > 20;
}

//Message Character Counter Event Listener
message.addEventListener('input', charfunction);

// Character counter function for message field
function charfunction() {
    const charCount = message.value.length;
    const counterElement = document.getElementById('message-counter');
    counterElement.textContent = `${charCount}/20 characters`;
    if (charCount < 20) {
        counterElement.style.color = '#dc3545';
    } else {
        counterElement.style.color = 'rgb(30, 223, 72)';
    }
}

// Send Button Event Listener
sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    let isValid = true; // Assume form is valid

    // Validate Names
    // Run validation functions, If invalid, show error, set isValid to false
    if (!validateName(firstName.value)) {
        showError(firstName, "First name must contain only letters.");
        isValid = false;
    }
    // If valid, clear error
    else {
        clearError(firstName);
    }

    if (!validateName(lastName.value)) {
        showError(lastName, "Last name must contain only letters.");;
        isValid = false;
    }
    else {
        clearError(lastName);
    }

    // Validate Email
    if (!validateEmail(email.value)) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
    }
    else {
        clearError(email);
    }

    // Validate Phone
    if (!validatePhone(phone.value) && phone.value.trim() !== "") {
        showError(phone, "Please enter a valid phone number.");
        isValid = false;
    }
    else {
        clearError(phone);
    }

    // Validate Subject
    if (subject.value.trim() === "") {
        showError(subject, "Subject cannot be empty.");
        isValid = false;
    }
    else {
        clearError(subject);
    }

    // Validate Message
    if (!validateMessage(message.value)) {
        showError(message, "Message cannot be under 20 characters.");
        isValid = false;
    }
    else {
        clearError(message);
    }

    // if Valid Check
    if (isValid) {
        //show alert message with sender's first name and styling
        const alertMessage = "Thank you " + firstName.value + "! I will contact you soon!";
        const alertDiv = document.createElement('div');
        alertDiv.textContent = alertMessage;
        alertDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: black; color: white; border-radius: 5px; border: 1px solid rgb(30, 223, 72); z-index: 1000;';
        document.body.appendChild(alertDiv);
        
        // Clear form 3 seconds after submission
        clearForm();
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
    else {
        console.log("Form contains errors. Please correct them before submitting.");
    }

});

// Clear Button Event Listener
clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    clearError(firstName);
    clearError(lastName);
    clearError(email);
    clearError(phone);
    clearError(subject);
    clearError(message);
    clearForm(); 
});

// Functions to handle error messages
function showError(input, msg) {
    input.classList.remove('contact-form-valid');
    input.classList.add('contact-form-invalid');
    const errorElement = document.getElementById(input.id + '-error');
    errorElement.textContent = msg;
    // Trigger animation by removing and re-adding the class
    errorElement.classList.remove('show-error');
    void errorElement.offsetWidth; // Force restart animation
    errorElement.classList.add('show-error');
    errorElement.classList.remove('hide-error');
}
    
function clearError(input) {
    input.classList.remove('contact-form-invalid');
    input.classList.add('contact-form-valid');
    const errorElement = document.getElementById(input.id + '-error');
    if (!errorElement.textContent) {
        errorElement.classList.remove('show-error', 'hide-error');
        return;
    }

    // Play fade-out, then clear text
    errorElement.classList.remove('show-error');
    errorElement.classList.add('hide-error');

    setTimeout(() => {
        errorElement.textContent = "";
        errorElement.classList.remove('hide-error');
    }, 200);
}

// Function to clear form fields
function clearForm() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    message.value = "";
    clearBoarders();
    charfunction(); // Reset character counter
}

function clearBoarders() {
    firstName.classList.remove('contact-form-valid', 'contact-form-invalid');
    lastName.classList.remove('contact-form-valid', 'contact-form-invalid');
    email.classList.remove('contact-form-valid', 'contact-form-invalid');
    phone.classList.remove('contact-form-valid', 'contact-form-invalid');
    subject.classList.remove('contact-form-valid', 'contact-form-invalid');
    message.classList.remove('contact-form-valid', 'contact-form-invalid');
}