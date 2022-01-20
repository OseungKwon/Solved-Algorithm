/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  zeros.forEach((zero) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (i === zero[0] || j === zero[1]) {
          matrix[i][j] = 0;
        }
      }
    }
  });

  console.log(matrix);
};
