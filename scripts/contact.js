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

// Validation that name is only letters
function validateName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    let isValid = true; // Assume form is valid

    // Validate each field
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

    if (isValid) {
        alert("Form submitted successfully!" + "\nFirst Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nEmail: " + email.value + "\nPhone: " + phone.value + "\nSubject: " + subject.value +  "\nMessage: " + message.value);
    }
    else {
        alert("Please correct the errors in the form before submitting.");
    }

});

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
}
    
function clearError(input) {
    const errorElement = document.getElementById(input.id + '-error');
    errorElement.textContent = "";
}
function clearForm() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    message.value = "";
}
