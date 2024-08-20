const sumDigits = (digits) => {
  // let n = Math.abs(digits) 
  if (digits < 0) digits *= -1
  let total = 0

  while (digits > 0) {
    total += digits % 10
    digits = Math.floor(digits / 10)
  }
  return total
}

console.log(sumDigits(-222))