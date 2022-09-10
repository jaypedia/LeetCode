/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const majorityCount = Math.ceil(nums.length / 2);
  let numCount = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (majority !== nums[i]) {
      majority = nums[i];
      numCount = 1;
    } else {
      numCount++;
    }

    if (numCount >= majorityCount) {
      return majority;
    }
  }

  return majority;
};