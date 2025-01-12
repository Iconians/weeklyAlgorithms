// Given a string s, return true if the string can be a palindrome after deleting at most one
// character from it.

// Extension: Have the amount of removals be dynamic

const almostPalindrome = (s: string, removals: number = 1): boolean => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (removals === 0) return false;
      removals--;
      if (s[left + 1] === s[right]) {
        left++;
      } else if (s[left] === s[right - 1]) {
        right--;
      } else {
        return false;
      }
    }
    left++;
    right--;
  }

  return true;
};

console.log(almostPalindrome("aba")); // Output: true
console.log(almostPalindrome("abca")); // Output: true
console.log(almostPalindrome("abc")); // Output: false
console.log(almostPalindrome("racecar")); // Output: true
console.log(almostPalindrome("racecars")); // Output: true
console.log(almostPalindrome("racecars", 2)); // Output: true
console.log(almostPalindrome("racecars", 3)); // Output: true
console.log(almostPalindrome("racecars", 4)); // Output: true
console.log(almostPalindrome("racecars", 5)); // Output: true
console.log(almostPalindrome("racecars", 6)); // Output: true
