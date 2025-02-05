const groupAnagrams = (arr) => {
  const map = new Map();

  for (let str of arr) {
    const sort = str.split("").sort().join("");
    if (map.has(sort)) {
      map.get(sort).push(str);
    } else {
      map.set(sort, [str]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// output
/*
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
*/
