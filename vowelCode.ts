type Vowels = {
  [key: string]: number;
};

const vowels: Vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const encode = (str: string): string => {
  return str
    .split("")
    .map((char) => {
      return vowels[char as keyof Vowels] ? vowels[char as keyof Vowels] : char;
    })
    .join("");
};

const decode = (str: string): string => {
  return str
    .split("")
    .map((char) => {
      return Object.keys(vowels).find((key) => vowels[key] === +char) || char;
    })
    .join("");
};

console.log(encode("hello")); // h2ll4
console.log(decode("h2ll4")); // hello
