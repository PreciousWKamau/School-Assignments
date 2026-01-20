const myForm = document.getElementById('details');
const nameInput = document.getElementById('name');
const registrationInput = document.getElementById('registration');
const dateOfBirthInput = document.getElementById('date_of_birth');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('button');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const registration = registrationInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const age = ageInput.value;
}
);