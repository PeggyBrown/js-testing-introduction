const generateText = (name, birth) => {
// Returns output text
    return `${name} (${birth} years old)`;
};

exports.calculateAge = (birth) => {
    let date = new Date(Date.parse(birth));
    return Math.abs(2021 - date.getUTCFullYear());
}

exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
        return false;
    }
    if (notEmpty && text.trim().length === 0) {
        return false;
    }
    if (isNumber && +text === NaN) {
        return false;
    }
    return true;
};

exports.checkAndGenerate = (name, birth) => {
    if (!validateInput(name, true, false)) {
        return false;
    }
    return generateText(name, birth);
};

exports.generateText = generateText;
exports.validateInput = validateInput;