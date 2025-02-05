const isIsomorphic = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const mapStr1 = new Map();
  const mapStr2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    let str1Char = str1[i];
    let str2Char = str2[i];

    if (mapStr1.has(str1Char)) {
      if (mapStr1.get(str1Char) !== str2Char) {
        return false;
      }
    } else {
      mapStr1.set(str1Char, str2Char);
    }

    if (mapStr2.has(str2Char)) {
      if (mapStr2.get(str2Char) !== str1Char) {
        return false;
      }
    } else {
      mapStr2.set(str2Char, str1Char);
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add")); // Output: True
console.log(isIsomorphic("foo", "bar")); // Output: False
