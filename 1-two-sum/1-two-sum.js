/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    const nIndex = nums.indexOf(n);
    if (nums.includes(n) && nIndex !== i) return [i, nIndex];
  }
};
