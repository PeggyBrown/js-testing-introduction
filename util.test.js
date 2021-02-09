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

test('should create correct element with text in the browser', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        args: ["--windows-size=1920,1080"]
    });

    const page = await browser.newPage();
    await page.goto('file:///Users/aleksandrakunysz/Documents/Szkoła Testów/js-testing-introduction/index.html');
    await page.click("input#name");
    await page.type("input#name", "Ania");
    await page.waitForSelector("input#birth");
    await page.click("input#birth");
    await page.type("input#birth", "Mon Sep 10 2018");
    await page.keyboard.press('Enter');
    await page.click("#btnAddUser");
    await page.waitForSelector(".user-item");
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe("Ania (3 years old)");
});