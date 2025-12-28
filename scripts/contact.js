console.log("Contact page script loaded.");

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let sendButton = document.getElementById('form-send');
let clearButton = document.getElementById('form-clear');

// Validation that name is only letters

function validateName(name) {
    let nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

sendButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission for validation
    if (!validateName(firstName.value) || !validateName(lastName.value)) {
        alert("Please enter valid names using only letters.");
        return;
    }
    alert("Form submitted successfully!" + "\nFirst Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nEmail: " + email.value + "\nPhone: " + phone.value + "\nSubject: " + subject.value +  "\nMessage: " + message.value);
});