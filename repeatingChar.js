// Implement a function that returns the first non-repeating
// character in a string. If all characters are repeating, 
// return null.

const repeatingLetters = (str) => {
  const letterMap = {}

  for (let letter of str) {
    letterMap[letter] = (letterMap[letter] || 0) + 1
  }

  for (let letter of str) {
    if (letterMap[letter] === 1) return letter
  }
  return null
}

console.log(repeatingLetters("swiss"))
console.log(repeatingLetters("apple"))
console.log(repeatingLetters("aabbcc"))