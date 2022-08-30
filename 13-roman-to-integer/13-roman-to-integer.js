/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return s.split('').reduce((acc, cur, i, arr) => {
    const curNum = roman[cur];
    const nextNum = roman[arr[i + 1]] || 0;
    curNum < nextNum ? (acc -= curNum) : (acc += curNum);
    return acc;
  }, 0);
};