function checkExam(array1: string[], array2: string[]): number {
  let grade = array1.reduce((acc, answer, index) => {
    if (array2[index] === "") {
      return acc;
    }
    if (answer === array2[index]) {
      return acc + 4;
    } else {
      return acc - 1;
    }
  }, 0);

  return grade < 0 ? 0 : grade;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0
