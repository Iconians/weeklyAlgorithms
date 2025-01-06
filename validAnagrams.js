// Given two strings s and t, write a function to determine if t is an anagram of s.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("apple", "pale")); // false
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aabbcc", "abcabc")); // true
