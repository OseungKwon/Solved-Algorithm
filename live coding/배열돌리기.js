// 참고: https://velog.io/@devjade/JavaScript로-matrix-회전-알고리즘-구현하기

const n = 4; //가로길이
const m = 4; // 세로길이
let k = 1; // 회전 수

// 배열 생성
const arr = Array.from(Array(n), (_, index) =>
  Array.from({ length: m }, (_, i) => index * n + i + 1)
);
console.log(arr);

// 회전할 빈 배열 생성
const newArr = Array.from(Array(n), () => Array(m).fill(0));
console.log(newArr);

// 90도 회전
while (k)
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(arr[i][j]);
    }
    for (let j = 0; j < m; j++) {
      newArr[j][m - 1 - i] = temp.shift();
    }
  }
console.log(newArr);
