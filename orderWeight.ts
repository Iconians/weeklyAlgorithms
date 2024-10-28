const weight = (str: string) =>
  str.split("").reduce((acc, curr) => acc + +curr, 0);

const orderWeight = (strng: string): string => {
  // const splitStr =
  return strng
    .split(" ")
    .sort((a, b) => {
      const weightA = weight(a);
      const weightB = weight(b);
      if (weightA === weightB) {
        return a.localeCompare(b);
      }
      return weightA - weightB;
    })
    .join(" ");
  // return splitStr.join(" ");
};

console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
