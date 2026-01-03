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
    if (!validateName(firstName.value)) {
        showError(firstName, "First name must contain only letters.");
        firstName.classList.remove('contact-form-valid');
        firstName.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(firstName);
        firstName.classList.remove('contact-form-invalid');
        firstName.classList.add('contact-form-valid');
    }
    if (!validateName(lastName.value)) {
        showError(lastName, "Last name must contain only letters.");
        lastName.classList.remove('contact-form-valid');
        lastName.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(lastName);
        lastName.classList.remove('contact-form-invalid');
        lastName.classList.add('contact-form-valid');
    }

    // Validate Email
    if (!validateEmail(email.value)) {
        showError(email, "Please enter a valid email address.");
        email.classList.remove('contact-form-valid');
        email.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(email);
        email.classList.remove('contact-form-invalid');
        email.classList.add('contact-form-valid');
    }

    // Validate Phone
    if (!validatePhone(phone.value) && phone.value.trim() !== "") {
        showError(phone, "Please enter a valid phone number.");
        phone.classList.remove('contact-form-valid');
        phone.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(phone);
        phone.classList.remove('contact-form-invalid');
        phone.classList.add('contact-form-valid');
    }

    // Validate Subject
    if (subject.value.trim() === "") {
        showError(subject, "Subject cannot be empty.");
        subject.classList.remove('contact-form-valid'); 
        subject.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(subject);
        subject.classList.remove('contact-form-invalid');
        subject.classList.add('contact-form-valid');
    }

    // Validate Message
    if (!validateMessage(message.value)) {
        showError(message, "Message cannot be under 20 characters.");
        message.classList.remove('contact-form-valid');
        message.classList.add('contact-form-invalid');
        isValid = false;
    }
    else {
        clearError(message);
        message.classList.remove('contact-form-invalid');
        message.classList.add('contact-form-valid');
    }

    // if Valid Check
    if (isValid) {
        const alertMessage = "Thank you " + firstName.value + "! I will contact you soon!";
        const alertDiv = document.createElement('div');
        alertDiv.textContent = alertMessage;
        alertDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: black; color: white; border-radius: 5px; border: 1px solid rgb(30, 223, 72); z-index: 1000;';
        document.body.appendChild(alertDiv);
        
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
    clearForm(); 
    clearError(firstName);
    clearError(lastName);
    clearError(email);
    clearError(phone);
    clearError(subject);
    clearError(message);
});

// Functions to handle error messages
function showError(input, msg) {
    const errorElement = document.getElementById(input.id + '-error');
    errorElement.textContent = msg;
    // Trigger animation by removing and re-adding the class
    errorElement.classList.remove('show-error');
    void errorElement.offsetWidth; // Force restart animation
    errorElement.classList.add('show-error');
    errorElement.classList.remove('hide-error');
}
    
function clearError(input) {
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