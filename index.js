// A capitalize function that takes a string and
// returns it with the first character capitalized.
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// A reverseString function that takes a string and returns it reversed
export function reverseString(string) {
  return string.split("").reverse().join("");
}

// A calculator object that contains functions for the basic
// operations: add, subtract, divide, and multiply. Each of these
// functions should take two numbers and return the correct calculation.
export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (!char.match(/[a-zA-Z]/)) return char; // not a letter? leave it

      const base = char === char.toUpperCase() ? 65 : 97;
      const shifted = ((char.charCodeAt(0) - base + shift) % 26) + base;

      return String.fromCharCode(shifted);
    })
    .join("");
}

export function analyzeArray(arr) {
  const length = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((sum, n) => sum + n, 0) / length;

  return { average, min, max, length };
}
