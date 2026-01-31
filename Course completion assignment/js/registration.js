const registrationForm = document.getElementById('RegistrationForm');
const errorMsg = document.getElementById('errorMsg');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMsg.textContent = "All fields are required.";
        return;
    }
    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
    }
    errorMsg.textContent = "Registration successful!";
    console.log("User registered:", { username, email });
    registrationForm.reset();    
});