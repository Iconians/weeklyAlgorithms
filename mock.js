/* 
$ Calculator 

* Given a string s which represents an expression, evaluate this expression and return its value. 
* The integer division should truncate toward zero. You may assume that the given expression is always valid.
* All intermediate results will be in the range of [-2^31, 2^31 - 1].

? Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

$ Example 1:
Input: s = "3+2*2"
Output: 7

$ Example 2:
Input: s = " 3/2 "
Output: 1

$ Example 3:
Input: s = " 3+5 / 2 "
Output: 5
 

! Constraints:

* 1 <= s.length <= 3 * 105
* s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
* s represents a valid expression.
* All the integers in the expression are non-negative integers in the range [0, 231 - 1].
* The answer is guaranteed to fit in a 32-bit integer.
*/

const calculator = (str) => {
  const strToArr = str.split(/([+\-*/])/);
  let sum = 0;
  console.log(strToArr);

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "*") {
      sum = parseInt(strToArr[i - 1]) * parseInt(strToArr[i + 1]);
    }
    if (strToArr[i] === "/") {
      sum = parseInt(strToArr[i - 1]) / parseInt(strToArr[i + 1]);
    }
  }

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "+") {
      sum = sum + parseInt(strToArr[i - 1]);
    }
    if (strToArr[i] === "-") {
      sum = parseInt(strToArr[i - 1]) - sum;
    }
  }

  console.log(Math.floor(sum));
};

console.log(calculator("3+2*2")); // 7
console.log(calculator("3/2")); // 1
console.log(calculator("3+5/2")); // 5
console.log(calculator("13-2*2")); // 9
