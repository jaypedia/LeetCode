/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stack = [];
  for (const v of s) {
    if (!map.has(v)) {
      stack.push(v);
      continue;
    }
    if (map.get(v) !== stack[stack.length - 1]) return false;
    stack.pop();
  }
  return stack.length === 0;
};