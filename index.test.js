import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

describe("capitalize", () => {
  test("Capitalize the first letter of the string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

describe("reverse", () => {
  test("Reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("calculator", () => {
  test("Add two positive numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test("Subtract two numbers", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test("Divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  test("Multiply two numbers", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
});

describe("caesarCipher", () => {
  test("shifts letters by the given factor", () => {
    expect(caesarCipher("Hello", 3)).toBe("Khoor");
  });
  test("wraps from z back to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("leaves punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("works with shift larger than 26", () => {
    expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = shift of 3
  });
});

describe("analyzeArray", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  test("returns correct length", () => {
    expect(result.length).toBe(6);
  });
  test("returns correct min", () => {
    expect(result.min).toBe(1);
  });
  test("returns correct max", () => {
    expect(result.max).toBe(8);
  });
  test("returns correct average", () => {
    expect(result.average).toBe(4);
  });
  test("works with a single element", () => {
    const single = analyzeArray([5]);
    expect(single).toEqual({ average: 5, min: 5, max: 5, length: 1 });
  });
  test("works with negative numbers", () => {
    const neg = analyzeArray([-3, -1, -2]);
    expect(neg).toEqual({ average: -2, min: -3, max: -1, length: 3 });
  });
});
