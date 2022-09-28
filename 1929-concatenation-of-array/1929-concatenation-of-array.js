/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const answer = nums;
    nums.forEach(v => answer.push(v));
    return answer;
};