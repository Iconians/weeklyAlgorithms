const fizzBuzz = (fizz, buzz) => {
  for (let i = 1; i <= 100; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log("FizzBuzz")
    } else if (i % fizz === 0) {
      console.log("Fizz")
    } else if (i % buzz === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(3, 5)
fizzBuzz(2, 6)
fizzBuzz(4, 7)