// Prompt: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ensure the function ignores spaces, punctuation, 
// and case differences when checking for a palindrome. 
// Extension: Write a recursive version of this function.


const checkPalindrome = (str, left, right) => {
  if (left >= right) return true
  if (str[left] !== str[right]) return false
  return checkPalindrome(str, left + 1, right - 1)
}

const palindrome = (str) => {
  const stripStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  return checkPalindrome(stripStr, 0, stripStr.length - 1)
}

console.log(palindrome("A man, a plan,  a canal, Panama"), "should return true")
console.log(palindrome("I love coding!"), "should return false")




