const dictionary = (str) => {
  const vowels = "aeiou"
  let count = {
    vowels: 0,
    consonants: 0
  }
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char.toLowerCase())) {
        count.vowels += 1
      } else {
        count.consonants += 1
      }
    }
  }
  return count
}

console.log(dictionary("I am happy! that this is done!"))