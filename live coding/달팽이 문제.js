// 정사각형 끝에서부터 빙글빙글 돌면서 정사각형 채우는 문제
// 참고: http://www.jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=980&sca=2020

// input은 정사각형 길이 n

const n = 6;
const arr = Array.from(Array(n), () => new Array(n).fill(0));

let num = 1;

let x = 0;
let y = 0;
let len = n - 1;

while (len >= 0) {
  for (let i = 0; i < len; i++) {
    arr[x][y] = num++;
    y++;
  }
  for (let i = 0; i < len; i++) {
    arr[x][y] = num++;
    x++;
  }

  for (let i = 0; i < len; i++) {
    arr[x][y] = num++;
    y--;
  }

  for (let i = 0; i < len; i++) {
    arr[x][y] = num++;
    x--;
  }
  len -= 2;
  x++;
  y++;
}
if (n % 2 === 1) arr[x - 1][y - 1] = num++;

console.log(arr);
