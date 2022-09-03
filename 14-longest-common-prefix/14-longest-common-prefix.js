/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const currentLetter = strs[0][i];
        if (!checkPrefix(strs, i, currentLetter)) return prefix;
        else prefix += currentLetter;
    }
    return prefix;
};
             
const checkPrefix = (arr, index, letter) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][index] !== letter) return false;
    }
    return true;
}