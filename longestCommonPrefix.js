// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const isCommonPrefix = (arr) => {
  let str = "";
  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

console.log(isCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(isCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(isCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"
console.log(isCommonPrefix(["throne", "throne"])); // "throne"
console.log(isCommonPrefix(["throne", "dungeon"])); // ""
console.log(isCommonPrefix(["apple", "ape", "april"])); // "ap"
