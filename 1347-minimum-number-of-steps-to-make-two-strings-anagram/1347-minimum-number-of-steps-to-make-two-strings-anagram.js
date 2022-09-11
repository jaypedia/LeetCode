/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let answer = 0;
    const map = new Map();
    for (const l of s) {
      if (map.has(l)) {
        map.set(l, map.get(l) + 1);
      } else {
        map.set(l, 1);
      }
    }
  
    for (const letter of t) {
      if (map.get(letter) > 0) {
        map.set(letter, map.get(letter) - 1)
      } else {
        answer += 1;
      }
    }
  return answer;
  
};