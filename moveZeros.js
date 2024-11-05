const moveZeros = (arr) => {
  let zeroArr = [];
  let newArr = [];
  for (let int of arr) {
    if (int !== 0) {
      newArr.push(int);
    } else {
      zeroArr.push(int);
    }
  }
  return newArr.concat(zeroArr);
};

// array method for same for loop
// arr.filter(int => int !== 0).concat(arr.filter(int => int === 0))

console.log(moveZeros([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9]));
