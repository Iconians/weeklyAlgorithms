// Given an array where the i-th element is the price of a given stock on day i, find the maximum profit you can achieve
// by buying and then selling the stock. You can only complete one transaction.

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5 (Buy on day 2 at price 1 and sell on day 5 at price 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // Expected output: 0 (No transaction is done, i.e., max profit = 0)
console.log(maxProfit([1, 2, 3, 4, 5])); // Expected output: 4 (Buy on day 1 at price 1 and sell on day 5 at price 5)
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // Expected output: 4 (Buy on day 4 at price 0 and sell on day 7 at price 4)
console.log(maxProfit([1, 2])); // Expected output: 1 (Buy on day 1 at price 1 and sell on day 2 at price 2)
