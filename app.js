const {calculateAge} = require("./util");
const {checkAndGenerate, createElement} = require('./util');

var birthDayPicker = new Pikaday({
    field: document.getElementById('birth')
});

const initApp = () => {
    // Initializes the app, registers the button click listener
    const newUserButton = document.querySelector('#btnAddUser');
    newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
    // Fetches the user input, creates a new HTML element based on it
    // and appends the element to the DOM
    const newUserNameInput = document.querySelector('input#name');

    const outputText = checkAndGenerate(
        newUserNameInput.value,
        calculateAge(birthDayPicker.toString())
    );

    if (!outputText) {
        return;
    }

    const userList = document.querySelector('.user-list');

    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
};

// Start the app!
initApp();