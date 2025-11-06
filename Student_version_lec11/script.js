// =========================
// Get Elements from HTML
// =========================
const lengthInput = document.getElementById("length");
const upperCheck = document.getElementById("upperCase");
const lowerCheck = document.getElementById("lowerCase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");
const resultElement = document.getElementById("result");
const generateBtn = document.getElementById("generate");

// =========================
// Character Arrays
// =========================
const UPPER_CASE = getArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const LOWER_CASE = getArray("abcdefghijklmnopqrstuvwxyz");
const NUMBERS = getArray("0123456789");
const SYMBOLS = getArray("~`!@#$%^&*()-_=+[{]}|;:,<>.?/");

// Convert a string into an array of characters
function getArray(str) {
  return str.split("");
}

// =========================
// Generate Button Click
// =========================
generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);

  // no length? no password!
  if (!length || length < 1) {
    resultElement.textContent = "Choose a valid length!";
    return;
  }

  const password = generatePassword(
    length,
    upperCheck.checked,
    lowerCheck.checked,
    numberCheck.checked,
    symbolCheck.checked
  );

  resultElement.textContent = password;
});

// =========================
// Password Generator
// =========================
function generatePassword(length, upper, lower, number, symbol) {
  let finalPassword = "";
  let charPool = [];

  // add selected character types
  if (upper) charPool = charPool.concat(UPPER_CASE);
  if (lower) charPool = charPool.concat(LOWER_CASE);
  if (number) charPool = charPool.concat(NUMBERS);
  if (symbol) charPool = charPool.concat(SYMBOLS);

  // if nothing is selected
  if (charPool.length === 0) {
    return "Select at least ONE option!";
  }

  // generate password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    finalPassword += charPool[randomIndex];
  }

  return finalPassword;
}
