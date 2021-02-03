
const puppeteer = require("puppeteer");
const {checkAndGenerate} = require("./util");
const {generateText} = require('./util');

test('should output text name and age', () => {
    const text = generateText('Ania', 29);
    expect(text).toBe("Ania (29 years old)");
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Mateusz', 24);
    expect(text).toBe('Mateusz (24 years old)');
});
