function order(words){
  return words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ")
}

// recursive function
const findPosition = (arr, sorted = []) => {
  if (arr.length === 0) return sorted
  let minIndex = 0
  let minPos = 10

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]
    for (let j = 0; word.length; j++) {
      if (word[j] >= "1" && word[j] <= "9") {
        const pos = parseInt(word[j], 10)
        if (pos < minPos) {
          minPos = pos
          minIndex = i
        }
        break
      }
    }
  }
    sorted.push(arr[minIndex])
    const remainingWords = arr.slice(0, minIndex).concat(arr.slice(minIndex + 1))
    return findPosition(remainingWords, sorted)
}

function otherOrder(words) {
  if (words === "") return ""
  const wordsArr = words.split(" ")
  const sortedArr = findPosition(wordsArr)
  return sortedArr.join(" ")
}

console.log(otherOrder("is2 Thi1s T4est 3a"), "should be Thi1s is2 3a T4est")
console.log(otherOrder("4of Fo1r pe6ople g3ood th5e the2"), "should be Fo1r the2 g3ood 4of th5e pe6ople")
console.log(otherOrder(""), "should be ''")