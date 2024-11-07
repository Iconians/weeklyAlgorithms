const string = "The greatest victory is that which requires no battle";

const reverseWords = (str) => {
  const arr = str.split(" ");
  const returnArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    returnArr.push(arr[i]);
  }
  return returnArr.join(" ");
};

// streamlined version
// const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords(string));
