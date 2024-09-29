document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.registrationForm');

    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Event listeners for blur events
    nameInput.addEventListener('blur', validateName);
    usernameInput.addEventListener('blur', validateUsername);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePasswordMatch);
    confirmPasswordInput.addEventListener('blur', validatePasswordMatch);

    function clearErrorMessages() {
        nameError.textContent = '';
        usernameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
    }

    let isValid = false;
    function validateName() {

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name cannot be empty.";
            isValid = false;
        } else {
            nameError.textContent = "";
            isValid = true;
        }
    }

    function validateUsername() {

        if (usernameInput.value.trim() === "") {
            usernameError.textContent = "Username cannot be empty.";
            isValid = false;
        } else {
            usernameError.textContent = "";
            isValid = true;
        }
    }

    function validateEmail() {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
            isValid = true;
        }
    }

    function validatePhone() {

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = "Please enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            phoneError.textContent = "";
            isValid = true;
        }
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = "Password must be at least 8 characters long, contain an uppercase letter, and a number.";
            isValid = false;
        } else {
            passwordError.textContent = "";
            isValid = true;
        }
    }

    function validatePasswordMatch() {

        if (passwordInput.value !== confirmPasswordInput.value || passwordInput.value == '') {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
            isValid = true;
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateName();
        validateUsername();
        validateEmail();
        validatePhone();
        validatePassword();
        validatePasswordMatch();

        if (isValid) {
            clearErrorMessages();
            localStorage.setItem('name', nameInput.value.trim());
            localStorage.setItem('userName', usernameInput.value);
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('phone', phoneInput.value);
            window.location.href = 'success.html';
        }
        return isValid;
    });
});