/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (maxProfit >= profit && prices[left] > prices[right]) {
      left = right;
    } else if (maxProfit < profit) {
      maxProfit = profit;
    }
    right++;
  }
  return maxProfit;
};