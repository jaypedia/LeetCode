/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    if (nums[mid] > target) hi = mid - 1;
  }

  if (lo >= hi) return lo;
};