const maxValue = (arr) => {
  let highNum = [arr[0], 0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highNum[0]) {
      highNum = [arr[i], i]
    } 
  }
  return highNum
}

console.log(maxValue([2, 4, 2, 1, 7, 11, 5, 6, 8, 9]))