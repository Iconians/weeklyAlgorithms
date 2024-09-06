// "Prompt: Write a function that takes a string as input and 
// returns the number of vowels (a, e, i, o, u) in the string.
// Extension: Modify the function to also return the number of 
// consonants in the string as well."

const countLetters = (str) => {
  const transformStr = str.replaceAll(" ", "").toLowerCase()
  const vowels = new Set(["a", "e", "i", "o", "u"])
  let vowelCount = 0
  let consonantsCount = 0
  if (!/^[a-z]+$/.test(transformStr)) return "only accepts alphabetic characters" 

  for (let letter of transformStr) {
      if (vowels.has(letter)) {
        vowelCount++
      } else {
        consonantsCount++
      }
  }
  return {vowelCount, consonantsCount}
}

console.log(countLetters("The rain in spain rains mainly on the plain"))