//  Write a function that takes a string and returns the length of the longest substring without repeating characters.

const longestSubstring = (s: string): number => {
  const map = new Map<string, number>();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(map.get(char)! + 1, left);
    }
    map.set(char, right);
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
console.log(longestSubstring("")); // 0
console.log(longestSubstring(" ")); // 1
