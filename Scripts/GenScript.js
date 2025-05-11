const numberButton = document.getElementById("numberGen");
const stringButton = document.getElementById("stringGen");
const uuidButton = document.getElementById("uuidGen");
const colorButton = document.getElementById("colorGen");
const passwordButton = document.getElementById("passwordGen");
const diceButton = document.getElementById("diceGen");

numberButton.addEventListener("click", () => loadGenerator('number'));
stringButton.addEventListener("click", () => loadGenerator('string'));
uuidButton.addEventListener("click", () => loadGenerator('uuid'));
colorButton.addEventListener("click", () => loadGenerator('color'));
passwordButton.addEventListener("click", () => loadGenerator('password'));
diceButton.addEventListener("click", () => loadGenerator('dice'));

let generators = {
    'number': `
        <h2>Random Number Generator</h2>
        <input type='number' id='minNumber' placeholder='Min' value='1'>
        <input type='number' id='maxNumber' placeholder='Max' value='100'>
        <div>
        <button onclick='generateRandomNumber()'>Generate</button>
        <i class="fa-solid fa-paste copyToClipboard" onclick='copyToClipboard("numberOutput")'></i>
        </div>
        <p id='numberOutput'></p>`,
    'string': `
        <h2>Random String Generator</h2>
        <input type='number' id='stringLength' placeholder='Length' value='10'>
        <label><input type='checkbox' id='includeCaps'> Include Uppercase</label>
        <label><input type='checkbox' id='includeNumbers'> Include Numbers</label>
        <label><input type='checkbox' id='includeChars'> Include Special Characters</label>
        <div>
        <button onclick='generateRandomString()'>Generate</button>
        <i class="fa-solid fa-paste copyToClipboard" onclick='copyToClipboard("stringOutput")'></i>
        </div>
        <p id='stringOutput'></p>`,
    'uuid': `
        <h2>UUID Generator</h2>
        <div>
        <button onclick='generateUuid()'>Generate</button>
        <i class="fa-solid fa-paste copyToClipboard" onclick='copyToClipboard("uuidOutput")'></i>
        </div>
        <p id='uuidOutput'></p>`,
    'color': `
        <h2>Random Color Generator</h2>
        <div>
        <button onclick='generateRandomColor()'>Generate</button>
        <i class="fa-solid fa-paste copyToClipboard" onclick='copyToClipboard("colorOutput")'></i>
        </div>
        <p id='colorOutput' style='font-weight:bold;'></p>
        <div id='colorBox' style='width:50px; height:50px; margin:auto;'></div>`,
    'password': `
        <h2>Random Password Generator</h2>
        <input type='number' id='passwordLength' placeholder='Length' value='12'>
        <label><input type='checkbox' id='includeCapsPass'> Include Uppercase</label>
        <label><input type='checkbox' id='includeNumbersPass'> Include Numbers</label>
        <label><input type='checkbox' id='includeCharsPass'> Include Special Characters</label>
        <div>
        <button onclick='generateRandomPassword()'>Generate</button>
        <i class="fa-solid fa-paste copyToClipboard" onclick='copyToClipboard("passwordOutput")'></i>
        </div>
        <p id='passwordOutput'></p>`,
    'dice': `
        <h2>Dice Roller</h2>
        <button onclick='rollDice()'>Roll</button>
        <p id='diceOutput'></p>`
};

function loadGenerator(type) {
    document.getElementById("generatorsDisplay").innerHTML = generators[type] || "<p>Generator not available.</p>";
}

function generateRandomNumber() {
    let min = parseInt(document.getElementById("minNumber").value) || 1;
    let max = parseInt(document.getElementById("maxNumber").value) || 100;
    if (min > max) [min, max] = [max, min];
    document.getElementById("numberOutput").textContent = Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString() {
    let length = parseInt(document.getElementById("stringLength").value) || 10;
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById("includeCaps").checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById("includeNumbers").checked) chars += '0123456789';
    if (document.getElementById("includeChars").checked) chars += '!@#$%^&*()_+';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("stringOutput").textContent = result;
}

function generateUuid() {
    document.getElementById("uuidOutput").textContent = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
              v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateRandomColor() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.getElementById("colorOutput").textContent = color;
    document.getElementById("colorBox").style.backgroundColor = color;
}

function generateRandomPassword() {
    let length = parseInt(document.getElementById("passwordLength").value) || 12;
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById("includeCapsPass").checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById("includeNumbersPass").checked) chars += '0123456789';
    if (document.getElementById("includeCharsPass").checked) chars += '!@#$%^&*()_+';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("passwordOutput").textContent = result;
}

function rollDice() {
    document.getElementById("diceOutput").textContent = `🎲 ${Math.floor(Math.random() * 6) + 1}`;
}

function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Error copying to clipboard: ", err);
    });
}
