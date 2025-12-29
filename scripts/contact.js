console.log("Contact page script loaded.");

// Form field elements
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let sendButton = document.getElementById('form-send');
let clearButton = document.getElementById('form-clear');

//Error message elements 
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');


let isValid = true;

// Validation that name is only letters
function validateName(name) {
    let nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

sendButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission for validation
    if (!validateName(firstName.value)) {
        firstNameError.textContent = "First name must contain only letters.";
        isValid = false;
    }
    if (!validateName(lastName.value)) {
        lastNameError.textContent = "Last name must contain only letters.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!" + "\nFirst Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nEmail: " + email.value + "\nPhone: " + phone.value + "\nSubject: " + subject.value +  "\nMessage: " + message.value);
    }
    else {
        alert("Please correct the errors in the form before submitting.");
    }
    
});