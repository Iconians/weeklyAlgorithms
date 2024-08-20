// 1st example O(N)
const sum_char_codes = (n) => {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }
  return sum
}

console.log(sum_char_codes("513085468161651651681351156"))

// 2nd example O(N)?
const sum_char_codes2 = (n) => {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i)
  }
  return sum
}

console.log(sum_char_codes2("513085468161651651681351156"))

// 3rd example O(n)
const sum_char_codes3 = (n) => {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i)
    // returns if capital E is found
    if (charCode === 69) return sum
    sum += n.charCodeAt(i)
  }
  return sum
}

console.log(sum_char_codes3("jsknjkwnjknewknlklsamdlkmEe kelklmsklmlksa"))
// 4th example O(n^2) squared
const sum_char_codes4 = (n) => {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j< n.length; j++) { 
    sum += n.charCodeAt(i)
    }
  }
  return sum
}

console.log(sum_char_codes4("jsknjkwnjknewknlklsamdlkmEe kelklmsklmlksa"))

// 5th example O(n^3) Cubed
const sum_char_codes5 = (n) => {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i)
    for (let j = 0; j< n.length; j++) { 
      for (let k = 0; k < n.length; k++) {
        sum += charCode
      }
    }
  }
  return sum
}

// O(n log n)
// quicksort 

// O(log n)
// Binary search trees 