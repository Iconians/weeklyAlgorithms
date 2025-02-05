const str = "swiss";

const firstNonRepeatingNum = (str) => {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else map.set(str[i], 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return str[i];
    }
  }
};

console.log(firstNonRepeatingNum(str));
