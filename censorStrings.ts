// Prompt: Write a function that takes a string and an array of words to censor.
// The function should return a new string where all occurrences of the words to censor
// are replaced with asterisks of the same length as the word.

// Extension: Modify the function to handle case-insensitive censorship and
// replace the censored words with a custom replacement string."

function censorString(
  input: string,
  wordsToCensor: string[],
  replacement: null | string = null
) {
  return input
    .split(" ")
    .map((word) => {
      if (
        wordsToCensor.some(
          (censor) => word.toLowerCase() === censor.toLowerCase()
        )
      ) {
        return replacement !== null
          ? replacement.repeat(word.length)
          : "*".repeat(word.length);
      }
      return word;
    })
    .join(" ");
}

console.log(censorString("This is a secret message", ["SECRET", "MESSAGE"]));
// Output: "This is a ****** *******" (case-insensitive)

console.log(
  censorString("This is a secret message", ["secret", "message"], "#")
);
// Output: "This is a ###### #######" (custom replacement)
