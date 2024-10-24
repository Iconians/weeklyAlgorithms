// Write a function that takes a string and returns a dictionary with each character as the key and the number of times it
// appears in the string as the value.

const countLetters = (s: string): Record<string, number> => {
  const map: Record<string, number> = {};
  const str = s.split("");
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};

console.log(countLetters("Hello, World!")); // { H: 1, e: 1, l: 3, o: 2, ",": 1, " ": 1, W: 1, r: 1, d: 1, "!": 1 }

// Modify the function to ignore spaces and punctuation, and count letters case-insensitively.

const countLetters2 = (s: string): Record<string, number> => {
  const map: Record<string, number> = {};
  const str = s.toLowerCase().replace(/[^a-z]/g, "");
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};

console.log(countLetters2("Hello, World!")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
// Modify the function to return the kth most commonly occurring letter.
// Example: ("Hello, World!", 2) would return the 2nd most common letter in the string. In this case, "o"!

const countLetters3 = (s: string, k: number): string => {
  const map: Record<string, number> = {};
  const str = s.toLowerCase().replace(/[^a-z]/g, "");
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return sorted[k - 1][0];
};

console.log(countLetters3("Hello, World!", 2)); // "o"
