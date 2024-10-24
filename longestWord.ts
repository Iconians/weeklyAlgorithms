// Write a function that takes a string as input and returns the longest word in the string.

const longestWord = (str: string): string => {
  const splitStr = str.split(" ");
  let word = "";
  for (let i = 0; i < splitStr.length; i++) {
    let temp = splitStr[i];
    if (splitStr[i] === undefined) {
      if (temp.length < splitStr[i + 1].length) {
        temp = splitStr[i + 1];
      }
    }
    word = temp;
  }
  return word;
};

console.log(longestWord("This is a trying code problem")); // return problem

// Extension: Modify the function to return an array of all longest words (in case there are ties).

const longestWord2 = (str: string): string[] => {
  const splitStr = str.split(" ");
  let word: string[] = [];
  let max = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > max) {
      max = splitStr[i].length;
    }
  }

  for (let j = 0; j < splitStr.length; j++) {
    if (splitStr[j].length === max) {
      word.push(splitStr[j]);
    }
  }
  return word;
};

console.log(longestWord2("The cats sat on the mats with all hats")); // returns [cats, mats, with, hats]

//  how I would have solves these problems if I wasn't worried about algorithms and for loops

const longestWord3 = (str: string): string[] => {
  return str.split(" ").reduce(
    (acc, curr) => {
      const length = curr.length;
      if (length > acc.max) {
        acc.max = length;
        acc.word = [curr];
      } else if (length === acc.max) {
        acc.word.push(curr);
      }
      return acc;
    },
    { max: 0, word: [""] }
  ).word;
};

console.log(longestWord3("This is a code problem")); // return problem
console.log(longestWord3("The cats sat on the mats with all hats")); // returns [cats, mats, with, hats]
